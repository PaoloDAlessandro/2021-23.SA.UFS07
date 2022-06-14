import React from 'react';

import { Card_single_info } from '../src/molecules/card_single_info/Card_single_info';
import { Image } from '../src/atoms/image/Image';
import { Card_marca } from '../src/atoms/card_marca/Card_marca';
import ImagePeso from '../src/images/peso.svg';
import ImageTimer from '../src/images/timer.svg';
import ImageQuantità from '../src/images/quantità.svg';


export default {
  title: 'Example/Molecules/Card_single_info',
  component: Card_single_info,
  argTypes: {
  },
};

const Template = (args) => <Card_single_info {...args}>
    <Image src= {ImagePeso} id = {"peso"} />
    <Card_marca text={"250g"}></Card_marca>
  </Card_single_info>;

export const info_peso = Template.bind({});
info_peso.args = {
    id:"peso-es1",
};

const Template2 = (args) => <Card_single_info {...args}>
    <Image src= {ImageTimer} id={"timer"} />
    <Card_marca text={"25 min."}></Card_marca>
  </Card_single_info>;

export const info_timer = Template2.bind({});
info_timer.args = {
    id:"timer-es1",
};

const Template3 = (args) => <Card_single_info {...args}>
    <Image src= {ImageQuantità} id={"quantità"} />
    <Card_marca text={"2"}></Card_marca>
  </Card_single_info>;

export const info_quantità = Template3.bind({});
info_quantità.args = {
    id:"qunatità-es1",
};

