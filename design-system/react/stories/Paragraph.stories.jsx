import React from 'react';

import { Paragraph } from '../src/molecules/paragraph/Paragraph';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Molecules/Paragraph',
  component: Paragraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Paragraph {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    text: Text,
};

export const Secondary = Template.bind({});

Secondary.args = {
    text: Text,
}


