import React from 'react';

import { Card_marca } from '../src/atoms/card_marca/Card_marca';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/Card_marca',
  component: Card_marca,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

const Template = (args) => <Card_marca {...args}/>;

export const cremaCarciofi = Template.bind({});

cremaCarciofi.args = {
  text: 'Knorr',
};

export const raguContadino = Template.bind({});

raguContadino.args = {
  text: 'Barilla',
};

export const leerdammer = Template.bind({});

leerdammer.args = {
  text: 'Leerdammer',
};

export const rosette = Template.bind({});

rosette.args = {
  text: 'Schär',
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
