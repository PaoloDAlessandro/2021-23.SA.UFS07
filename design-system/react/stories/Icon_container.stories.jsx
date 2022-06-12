import React from 'react';

import { Icon_container } from '../src/molecules/icon_container/Icon_container';
import { Image } from '../src/atoms/image/Image';

export default {
  title: 'Example/Molecules/Icon_container',
  component: Icon_container,
  argTypes: {
  },
};

const Template = (args) => <Icon_container {...args}>
    <Image src = "ciao"/>
  </Icon_container>;

export const Primary = Template.bind({});
Primary.args = {
};