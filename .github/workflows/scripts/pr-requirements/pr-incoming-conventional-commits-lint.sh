#!/bin/bash

set -e

date

# this exit with 1 if no auth configured
gh auth status

# env passed by GitHub Action environment
# GITHUB_REF_NAME="18/merge"

if [ -z "${GITHUB_REF_NAME}" ];
then
    echo "env GITHUB_REF_NAME is empty"
    exit 1
fi

IFS=$'\/' read -r prId _ <<< $GITHUB_REF_NAME
echo "prId $prId"

# fetch more commits
# FIXME this is limited to the first 100 commits of the PR...
prCommits=`gh pr view $prId --json commits | jq '.commits | length'`
echo "prCommits: $prCommits"
fetchDepthToPrBase=`expr $prCommits + 2`
echo "fetchDepthToPrBase: $fetchDepthToPrBase"
git fetch --no-tags --prune --no-recurse-submodules --deepen=$fetchDepthToPrBase
git log -${fetchDepthToPrBase}

# retrive the pr first commit
prFirstCommitSha=`gh pr view $prId --json commits | jq -r '.commits | first | .oid'`
echo "prFirstCommitSha: $prFirstCommitSha"

# retrieve the pr base commit
prBaseSha=`git rev-parse $prFirstCommitSha^`
echo "prBaseSha: $prBaseSha"

set +e
# check every commit message from the prBaseSha
npm run commitlint -- -V --from $prBaseSha
lintStatus=$?
set -e

if [ "$lintStatus" -ne "0" ];
then
    echo "There are commits that do not respect conventional commits"
    # gh pr edit $prId --add-label "NOT_CONVENTIONAL_COMMITS"
    exit 1
else
    echo "All commits respect conventional commits spec!!!"
    # gh pr edit $prId --remove-label "NOT_CONVENTIONAL_COMMITS"
fi
