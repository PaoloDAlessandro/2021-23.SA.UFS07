import React from 'react';

import { Pantry } from '../src/pages/pantry/Pantry';
import { Header } from '../src/organisms/header/Header';
import { Title } from '../src/molecules/title/Title';
import { Text } from '../src/atoms/text/Text'; 
import { Icon_container } from '../src/molecules/icon_container/Icon_container';
import { Image } from '../src/atoms/image/Image';
import { Empty_div } from '../src/atoms/empty_div/Empty_div';
import { Header_child } from '../src/molecules/header_child/Header_child';
import { Footer_menu } from '../src/molecules/footer_menu/Footer_menu';
import { Footer } from '../src/organisms/footer/Footer';
import ImageFile  from "../src/images/back.svg";
import ImageHome from '../src/images/home.svg';
import ImagePantry from '../src/images/pantry.svg';
import ImageRecipes from '../src/images/recipes.svg';
import ImageAccount from '../src/images/account.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Pages/Pantry',
  component: Pantry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Pantry {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children:
    <>
    <Header children={

      <>
        <Header_child children={
          <Icon_container children={
            
            <Image src = {ImageFile}></Image>}>
            
            </Icon_container>}></Header_child>
            
            <Title width_size = "33.33%" children={
              
                <Text text='My pantry'/>}/>
            
            <Empty_div width_size="33.33%">
            
            </Empty_div>
          </>
          }></Header> 

          <Footer children={

            
            <Footer_menu children={
              <>
                <Image src = {ImageHome}></Image>
                <Image src = {ImagePantry}></Image>
                <Image src = {ImageRecipes}></Image>
                <Image src = {ImageAccount}></Image>
              </>
          }></Footer_menu>
          
        }></Footer>
          </>
};
