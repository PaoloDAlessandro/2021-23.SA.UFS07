import React from 'react';

import { Image } from '../src/atoms/image/Image';
import { Footer_menu } from '../src/molecules/footer_menu/Footer_menu';
import ImageHome from '../src/images/home.svg';
import ImagePantry from '../src/images/pantry.svg';
import ImageRecipes from '../src/images/recipes.svg';
import ImageAccount from '../src/images/account.svg';

export default {
  title: 'Example/Molecules/Footer_menu',
  component: Footer_menu,
  argTypes: {
  },
};

const Template = (args) => <Footer_menu {...args}></Footer_menu>;


export const Primary = Template.bind({});
Primary.args = {
    children:
    <>
        <Image src = {ImageHome}></Image>
        <Image src = {ImagePantry}></Image>
        <Image src = {ImageRecipes}></Image>
        <Image src = {ImageAccount}></Image>
    </>
};