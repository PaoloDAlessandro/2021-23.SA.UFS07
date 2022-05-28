#!/bin/bash

set -e

date

# this exit with 1 if no auth configured
gh auth status

# env passed by GitHub Action environment
GITHUB_REF_NAME="20/merge"
GITHUB_HEAD_REF="master"

if [ -z "${GITHUB_REF_NAME}" ];
then
    echo "env GITHUB_REF_NAME is empty"
    exit 1
fi

if [ -z "${GITHUB_HEAD_REF}" ];
then
    echo "env GITHUB_HEAD_REF is empty"
    exit 1
fi

# retrieve pr id
IFS=$'\/' read -r prId _ <<< $GITHUB_REF_NAME
echo "prId $prId"

# retrieve pr metadata
prData=`gh pr view $prId \
            --json baseRefName \
            --json author \
            --json updatedAt \
            --json headRepository \
            --json title | \
            jq -r '[.author.login, .baseRefName, .headRepository.name] | @tsv'`
IFS=$'\t' read -r authorUserName baseRefName headRepositoryName <<< $prData
echo "GITHUB_HEAD_REF: $GITHUB_HEAD_REF"
echo "authorUserName: $authorUserName"
echo "headRepositoryName: $headRepositoryName"
repo="$authorUserName/$headRepositoryName"
echo "repo: $repo"

# retrieve run count for the pr branch
RUN_COUNT=`gh run list --branch $GITHUB_HEAD_REF --repo $repo --limit 1 --json updatedAt | jq '. | length'`
if [ "$RUN_COUNT" -eq "0" ];
then
    echo "There is no run for this branch"
    exit 1
fi

# retrive head sha for run and pr
runHeadSha=`gh run list --branch $GITHUB_HEAD_REF --repo $repo --limit 1 --json headSha | jq -r '.[0].headSha'`
echo "runHeadSha: $runHeadSha"
# FIXME limited to 100 commits see https://github.com/cli/cli/issues/5415
# prHeadSha=`gh pr view $prId --json commits | jq -r '.commits | last | .oid'`
# echo "prHeadSha: $runHeadSha"
# if [ "$prHeadSha" != "$runHeadSha" ];
# then
#     echo "There is no run for the last commit of this PR"
#     exit 1
# fi

# retrieve metadata for the last run and check the status/conclusion
gh run list --branch $GITHUB_HEAD_REF --repo $repo --limit 1 \
            --json conclusion \
            --json updatedAt \
            --json status \
            --json url \
            --json databaseId | \
            jq -r '.[] | [.conclusion, .updatedAt, .status, .url, .databaseId] | @tsv' | \
            while IFS=$'\t' read -r conclusion updatedAt status url runId; do
                echo "========= checking run"
                echo "url: $url"
                echo "updatedAt: $updatedAt"
                echo "status: $status"
                echo "conclusion: $conclusion"
                echo "runId: $runId"

                if [ -z "${url}" ];
                then
                    echo "run url is empty so is queued"
                    gh run watch --repo $repo --exit-status $runId
                elif [ "$updatedAt" = "in_progress" ];
                then
                    echo "this run is not completed"
                    gh run watch --repo $repo --exit-status $url
                elif [ "$conclusion" != "success" ];
                then
                    echo "this run is completed without success"
                    exit 1
                fi
            done
