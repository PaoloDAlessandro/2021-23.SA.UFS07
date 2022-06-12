import React from 'react';

import { Empty_div } from '../src/atoms/empty_div/Empty_div';

export default {
  title: 'Example/Atoms/Empty_div',
  component: Empty_div,
  argTypes: {
  },
};

const Template = (args) => <Empty_div {...args}>

  </Empty_div>;

export const Full = Template.bind({});
Full.args = {
    width_size: "100%",
};

export const Half = Template.bind({});
Half.args = {
    width_size: "50%",
};

export const Small = Template.bind({});
Small.args = {
    width_size: "33%",
};