import React from 'react';

import { P } from '../src/atoms/p/P';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/P',
  component: P,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

const Template = (args) => <P {...args}/>;

export const Normal = Template.bind({});

Normal.args = {
  primary: true,
  input: 'a text',
};

export const RedText = Template.bind({});

RedText.args = {
  input: 'red text',
  color: 'red',
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
