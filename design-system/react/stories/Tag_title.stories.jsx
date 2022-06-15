import React from 'react';

import { Tag_title } from '../src/atoms/tag_title/Tag_title';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/Tag_title',
  component: Tag_title,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

const Template = (args) => <Tag_title {...args}/>;

export const glutenFree = Template.bind({});

cremaCarciofi.args = {
  text: 'Gluten free',
};
