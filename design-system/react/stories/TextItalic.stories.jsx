import React from 'react';

import { TextItalic } from '../src/atoms/textItalic/TextItalic';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/TextItalic',
  component: TextItalic,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TextItalic {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    text: "easy primary italic text",
};

export const Secondary = Template.bind({});

Secondary.args = {
    text: "easy secondary italic text",
}


