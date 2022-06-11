import React from 'react';

import { Title } from '../src/molecules/title/Title';
import { Text } from '../src/atoms/text/Text'
import { TextBold } from '../src/atoms/textBold/TextBold'
import { TextItalic } from '../src/atoms/textItalic/TextItalic'

export default {
  title: 'Example/Molecules/Title',
  component: Title,
  argTypes: {
  },
};

const Template = (args) => <Title {...args}>
  <Text text={"Text"} />
  <TextBold text={"Text Bold"} /> 
  <TextItalic text={"Text Italic"} />
  </Title>;

export const Primary = Template.bind({});
Primary.args = {
};