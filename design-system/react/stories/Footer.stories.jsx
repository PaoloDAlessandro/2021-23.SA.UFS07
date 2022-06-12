import React from 'react';

import { Image } from '../src/atoms/image/Image';
import { Footer_menu } from '../src/molecules/footer_menu/Footer_menu';
import { Footer } from '../src/organisms/footer/Footer';
import ImageHome from '../src/images/home.svg';
import ImagePantry from '../src/images/pantry.svg';
import ImageRecipes from '../src/images/recipes.svg';
import ImageAccount from '../src/images/account.svg';

export default {
  title: 'Example/Organisms/Footer',
  component: Footer,
  argTypes: {
  },
};

const Template = (args) => <Footer {...args}></Footer>;


export const Primary = Template.bind({});
Primary.args = {
    children:
      <Footer_menu children={
        <>
        <Image src = {ImageHome}></Image>
        <Image src = {ImagePantry}></Image>
        <Image src = {ImageRecipes}></Image>
        <Image src = {ImageAccount}></Image>
      </>
  }></Footer_menu>
};