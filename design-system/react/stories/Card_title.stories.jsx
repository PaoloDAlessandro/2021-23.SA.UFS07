import React from 'react';

import { Card_title } from '../src/atoms/card_title/Card_title';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/Card_title',
  component: Card_title,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

const Template = (args) => <Card_title {...args}/>;

export const cremaCarciofi = Template.bind({});

cremaCarciofi.args = {
  text: 'Crema carciofi',
};

export const raguContadino = Template.bind({});

raguContadino.args = {
  text: 'Ragù contadino',
};

export const leerdammer = Template.bind({});

leerdammer.args = {
  text: 'Leerdammer',
};

export const rosette = Template.bind({});

rosette.args = {
  text: 'Rosette',
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
