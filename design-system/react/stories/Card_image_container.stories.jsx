import React from 'react';

import { Card_image_container } from '../src/molecules/card_image_container/Card_image_container';
import { Card_image } from '../src/atoms/card_image/Card_image';
import ImageCremaCarciofi from '../src/images/cremaCarciofi.png';
import ImageraguContadino from '../src/images/raguContadino.png';

export default {
  title: 'Example/Molecules/Card_image_container',
  component: Card_image_container,
  argTypes: {
  },
};

const Template = (args) => <Card_image_container {...args}>
    <Card_image src = {ImageCremaCarciofi}/>
  </Card_image_container>;

export const cremaCarciofiCard = Template.bind({});
cremaCarciofiCard.args = {
    back_color: "#418C43",
    image: ImageCremaCarciofi,
};

export const raguContadinoCard = Template.bind({});
raguContadinoCard.args = {
    back_color: "#AA3C24",
    image: ImageCremaCarciofi,
};