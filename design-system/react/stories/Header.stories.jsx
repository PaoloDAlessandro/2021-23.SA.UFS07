import React from 'react';

import { Header } from '../src/organisms/header/Header';
import { Title } from '../src/molecules/title/Title';
import { Text } from '../src/atoms/text/Text'; 
import { Icon_container } from '../src/molecules/icon_container/Icon_container';
import { Image } from '../src/atoms/image/Image';
import { Empty_div } from '../src/atoms/empty_div/Empty_div';
import { Header_child } from '../src/molecules/header_child/Header_child';
import  ImageFile  from "../src/images/back.svg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Organisms/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children: 
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
};
