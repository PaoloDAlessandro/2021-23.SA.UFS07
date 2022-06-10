import React from 'react';

import { Paragraph } from '../src/molecules/paragraph/Paragraph';
import { Text } from '../src/atoms/text/Text'
import { TextBold } from '../src/atoms/textBold/TextBold'
import { TextItalic } from '../src/atoms/textItalic/TextItalic'

export default {
  title: 'Example/Molecules/Paragraph',
  component: Paragraph,
  argTypes: {
  },
};

const Template = (args) => <Paragraph {...args}>
  <Text text={"Text"} />
  <TextBold text={"Text Bold"} /> 
  <TextItalic text={"Text Italic"} />
  </Paragraph>;

export const Primary = Template.bind({});
Primary.args = {
};