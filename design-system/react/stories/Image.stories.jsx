import React from 'react';

import { Image } from '../src/atoms/image/Image';
import ImageHome from '../src/images/home.svg';
import ImagePantry from '../src/images/pantry.svg';
import ImageRecipes from '../src/images/recipes.svg';
import ImageAccount from '../src/images/account.svg';
import ImageBack from '../src/images/back.svg';
import ImageTimer from '../src/images/timer.svg';
import ImagePeso from '../src/images/peso.svg';
import ImageQuantità from '../src/images/quantità.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/Image',
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Image {...args} />;

export const Home = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Home.args = {
    src: ImageHome,
};

export const Pantry = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Pantry.args = {
    src: ImagePantry,
};

export const Recipes = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Recipes.args = {
    src: ImageRecipes,
};

export const Account = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Account.args = {
    src: ImageAccount,
};

export const Back = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Back.args = {
    src: ImageBack,
};

export const Timer = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Timer.args = {
    src: ImageTimer,
    id: "timer",
};

export const Quantità = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Quantità.args = {
    src: ImageQuantità,
    id: "quantità",
};

export const Peso = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Peso.args = {
    src: ImagePeso,
    id: "peso",
};