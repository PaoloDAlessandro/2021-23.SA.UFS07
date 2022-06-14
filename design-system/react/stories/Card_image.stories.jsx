import React from 'react';

import { Card_image } from '../src/atoms/card_image/Card_image';
import ImageCremaCarciofi from '../src/images/cremaCarciofi.png';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/Card_image',
  component: Card_image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card_image {...args} />;

export const cremaCarciofi = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
cremaCarciofi.args = {
    src: ImageCremaCarciofi,
};

