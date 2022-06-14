import React from "react";
import { Header } from 'test-1-dalex/umd/organisms/header/Header';
import { Title } from 'test-1-dalex/umd/molecules/title/Title';
import { Text } from 'test-1-dalex/umd/atoms/text/Text'; 
import { Icon_container } from 'test-1-dalex/umd/molecules/icon_container/Icon_container';
import { Image } from 'test-1-dalex/umd/atoms/image/Image';
import { Empty_div } from 'test-1-dalex/umd/atoms/empty_div/Empty_div';
import { Header_child } from 'test-1-dalex/umd/molecules/header_child/Header_child';
import { Footer_menu } from 'test-1-dalex/umd/molecules/footer_menu/Footer_menu';
import { Footer } from 'test-1-dalex/umd/organisms/footer/Footer';
import { Card_infos } from 'test-1-dalex/umd/organisms/card_infos/Card_infos';
import { Card_data } from 'test-1-dalex/umd/organisms/card_data/Card_data';
import { Card_single_info } from 'test-1-dalex/umd/molecules/card_single_info/Card_single_info';
import { Card_marca } from 'test-1-dalex/umd/atoms/card_marca/Card_marca';
import { Card_title } from 'test-1-dalex/umd/atoms/card_title/Card_title';
import { Card_image_container } from "test-1-dalex/umd/molecules/card_image_container/Card_image_container";
import { Card_image } from "test-1-dalex/umd/atoms/card_image/Card_image";
import ImagePeso from '../img/peso.svg';
import ImageTimer from '../img/timer.svg';
import ImageQuantità from '../img/quantità.svg';
import ImageFile  from "../img/back.svg";
import ImageHome from '../img/home.svg';
import ImagePantry from '../img/pantry.svg';
import ImageRecipes from '../img/recipes.svg';
import ImageAccount from '../img/account.svg';
import ImageCremaCarciofi from '../img/cremaCarciofi.png';


const App = () => ( 
    <div>
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



          <>
          <Card_image_container back_color={"#418C43"}>
            <Card_image src = {ImageCremaCarciofi}/>
          </Card_image_container>


          <Card_data>

          <Card_title text={"Crema carciofi"}></Card_title>
          <Card_marca text={"Knorr"}></Card_marca>

          <Card_infos>

          <>
              <Card_single_info> 
                  <Image src= {ImagePeso} id={"peso"} />
                  <Card_marca text={"250 g"}></Card_marca>
              </Card_single_info>
          </>

          <>
          <Card_single_info> 
              <Image src= {ImageQuantità} id={"quantità"} />
              <Card_marca text={"2"}></Card_marca>
          </Card_single_info>
          </>
          <>
          <Card_single_info> 
              <Image src= {ImageTimer} id={"timer"} />
              <Card_marca text={"25 min."}></Card_marca>
          </Card_single_info>
          </>
          </Card_infos>
          </Card_data>
          </>







          <Footer children={

            
            <Footer_menu children={
              <>
                <Image src = {ImageHome} id="home"></Image>
                <Image src = {ImagePantry} id="pantry" status="active"></Image>
                <Image src = {ImageRecipes} id="recipes"></Image>
                <Image src = {ImageAccount} id="account"></Image>
              </>
          }></Footer_menu>
          
        }></Footer>
          </>
    </div>
);

export default App;