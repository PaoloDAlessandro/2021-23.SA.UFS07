import React from 'react';

import { Button } from '../src/atoms/button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button_submit',
  type: 'submit',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button_reset',
  type: 'reset',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button_submit',
  type: 'submit',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  type: 'button',
};
