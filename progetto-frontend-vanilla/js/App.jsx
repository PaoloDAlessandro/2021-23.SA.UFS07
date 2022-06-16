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
import { Card } from "test-1-dalex/umd/organisms/card/Card";
import { Cards_container } from "test-1-dalex/umd/organisms/cards_container/Cards_container";
import { Tag_icon } from "test-1-dalex/umd/atoms/tag_icon/Tag_icon";
import { Tag_title } from "test-1-dalex/umd/atoms/tag_title/Tag_title";
import { Tag } from "test-1-dalex/umd/organisms/tag/Tag";
import { Card_combo } from "test-1-dalex/umd/organisms/card_combo/Card_combo";
import ImagePeso from '../img/peso.svg';
import ImageTimer from '../img/timer.svg';
import ImageQuantità from '../img/quantità.svg';
import ImageFile  from "../img/back.svg";
import ImageHome from '../img/home.svg';
import ImagePantry from '../img/pantry.svg';
import ImageRecipes from '../img/recipes.svg';
import ImageAccount from '../img/account.svg';
import ImageCremaCarciofi from '../img/cremaCarciofi.png';
import ImageRaguContadino from '../img/raguContadino.png';
import ImageLeerdammer from '../img/leerdammer.png';
import ImageRosette from '../img/rosette.png';
import ImageUova from '../img/uova.png';
import ImageMozzarella from '../img/mozzarella.png';
import ImageGlutenFree from '../img/glutenFree.svg';
import { Link } from "react-router-dom";

const Pantry = () => ( 
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

          <Cards_container>

          <Card>

          <>
          <Card_image_container back_color={"#418C43"}>
            <Card_image src = {ImageCremaCarciofi}/>
          </Card_image_container>


          <Card_data>
          <>
          <Card_title text={"Crema carciofi"}></Card_title>


          <Card_infos>

          <>
              <Card_single_info> 
                  <Image src= {ImagePeso} id={"peso"} />
                  <Card_marca text={"250 g"} class_style={"card_text"}></Card_marca>
              </Card_single_info>
          </>

          <>
          <Card_single_info> 
              <Image src= {ImageQuantità} id={"quantità"} />
              <Card_marca text={"2"} class_style={"card_text"}></Card_marca>
          </Card_single_info>
          </>
          <>
          <Card_single_info> 
              <Image src= {ImageTimer} id={"timer"} />
              <Card_marca text={"25 min."} class_style={"card_text"}></Card_marca>
          </Card_single_info>
          </>
          </Card_infos>
          </>
          </Card_data>
          </>
          </Card>

          <Card>

          <>
          <Card_image_container back_color={"#AA3C24"}>
            <Card_image src = {ImageRaguContadino}/>
          </Card_image_container>


          <Card_data>
          <>
          <Card_title text={"Ragù contadino"}></Card_title>
          <Card_marca text={"Barilla"} class_style={"marca"}></Card_marca>

          <Card_infos>

          <>
              <Card_single_info> 
                  <Image src= {ImagePeso} id={"peso"} />
                  <Card_marca text={"500 g"} class_style={"card_text"}></Card_marca>
              </Card_single_info>
          </>

          <>
          <Card_single_info> 
              <Image src= {ImageQuantità} id={"quantità"} />
              <Card_marca text={"1"} class_style={"card_text"}></Card_marca>
          </Card_single_info>
          </>
          <>
          <Card_single_info> 
              <Image src= {ImageTimer} id={"timer"} />
              <Card_marca text={"Pronto"} class_style={"card_text"}></Card_marca>
          </Card_single_info>
          </>
          </Card_infos>
          </>
          </Card_data>
          </>
          </Card>

          <Card>

          <>
          <Card_image_container back_color={"#EFC516"}>
            <Card_image src = {ImageLeerdammer}/>
          </Card_image_container>


          <Card_data>
          <>
          <Card_title text={"Leerdammer"}></Card_title>
          <Card_marca text={"Leerdammer"} class_style={"marca"}></Card_marca>

          <Card_infos>

          <>
              <Card_single_info> 
                  <Image src= {ImagePeso} id={"peso"} />
                  <Card_marca text={"350 g"} class_style={"card_text"}></Card_marca>
              </Card_single_info>
          </>

          <>
          <Card_single_info> 
              <Image src= {ImageQuantità} id={"quantità"} />
              <Card_marca text={"4"} class_style={"card_text"}></Card_marca>
          </Card_single_info>
          </>
          <>
          <Card_single_info> 
              <Image src= {ImageTimer} id={"timer"} />
              <Card_marca text={"Pronto"} class_style={"card_text"}></Card_marca>
          </Card_single_info>
          </>
          </Card_infos>
          </>
          </Card_data>
          </>
          </Card>
          <Card>

          <>
          <Card_image_container back_color={"#E8D6BB"}>
            <Card_image src = {ImageRosette}/>
          </Card_image_container>


          <Card_data>
          <>
          <Card_title text={"Rosette"}></Card_title>
          <Card_combo>
            <Card_marca text={"Schär"} class_style={"marca"}></Card_marca>
            <Tag back_color={"#8E5A28"} children={
            <>
            <Tag_icon><Image src={ImageGlutenFree} id={"gluten_free"}></Image></Tag_icon>
            <Tag_title text={"Gluten free"}></Tag_title>
            </>
          }></Tag>
          </Card_combo>

          <Card_infos>

          <>
              <Card_single_info> 
                  <Image src= {ImagePeso} id={"peso"} />
                  <Card_marca text={"500 g"} class_style={"card_text"}></Card_marca>
              </Card_single_info>
          </>

          <>
          <Card_single_info> 
              <Image src= {ImageQuantità} id={"quantità"} />
              <Card_marca text={"5"} class_style={"card_text"}></Card_marca>
          </Card_single_info>
          </>
          <>
          <Card_single_info> 
              <Image src= {ImageTimer} id={"timer"} />
              <Card_marca text={"8 min."} class_style={"card_text"}></Card_marca>
          </Card_single_info>
          </>
          </Card_infos>
          </>
          </Card_data>
          </>
          </Card>

          <Card>

            <>
            <Card_image_container back_color={"#2A7C0D"}>
              <Card_image src = {ImageUova} id={"uova"}/>
            </Card_image_container>


            <Card_data>
            <>
            <Card_title text={"Uova"}></Card_title>
            <Card_marca text={"Coccodì"} class_style={"marca"}></Card_marca>

            <Card_infos>

            <>
                <Card_single_info> 
                    <Image src= {ImagePeso} id={"peso"} />
                    <Card_marca text={"500 g"} class_style={"card_text"}></Card_marca>
                </Card_single_info>
            </>

            <>
            <Card_single_info> 
                <Image src= {ImageQuantità} id={"quantità"} />
                <Card_marca text={"6"} class_style={"card_text"}></Card_marca>
            </Card_single_info>
            </>
            <>
            <Card_single_info> 
                <Image src= {ImageTimer} id={"timer"} />
                <Card_marca text={"Pronta"} class_style={"card_text"}></Card_marca>
            </Card_single_info>
            </>
            </Card_infos>
            </>
            </Card_data>
            </>
            </Card>

            <Card>

            <>
            <Card_image_container back_color={"#D3D5D5"}>
              <Card_image src = {ImageMozzarella}/>
            </Card_image_container>


            <Card_data>
            <>
            <Card_title text={"Mozzarella"}></Card_title>
            <Card_marca text={"Vallelata"} class_style={"marca"}></Card_marca>

            <Card_infos>

            <>
                <Card_single_info> 
                    <Image src= {ImagePeso} id={"peso"} />
                    <Card_marca text={"265 g"} class_style={"card_text"}></Card_marca>
                </Card_single_info>
            </>

            <>
            <Card_single_info> 
                <Image src= {ImageQuantità} id={"quantità"} />
                <Card_marca text={"1"} class_style={"card_text"}></Card_marca>
            </Card_single_info>
            </>
            <>
            <Card_single_info> 
                <Image src= {ImageTimer} id={"timer"} />
                <Card_marca text={"Pronta "} class_style={"card_text"}></Card_marca>
            </Card_single_info>
            </>
            </Card_infos>
            </>
            </Card_data>
            </>
            </Card>

            </Cards_container>


          <Footer children={
            
            
            <Footer_menu children={
              <>
                <Image src = {ImageHome} id="home"></Image>
                <Link to = '/'>
                <Image src = {ImagePantry} id="pantry" status="active"></Image>
                </Link>
                <Link to= '/recipes'>
                <Image src = {ImageRecipes} id="recipes"></Image>
                </Link>
                <Image src = {ImageAccount} id="account"></Image>
              </>
          }></Footer_menu>
          
        }></Footer>
          </>
    </div>
);


const Recipes = () => ( 
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


        <Footer children={
          
          
          <Footer_menu children={
            <>
              <Image src = {ImageHome} id="home"></Image>
              <Link to = "/">
              <Image src = {ImagePantry} id="pantry"></Image>
              </Link>
              <Link to= "/recipes">
              <Image src = {ImageRecipes} id="recipes" status="active"></Image>
              </Link>
              <Image src = {ImageAccount} id="account"></Image>
            </>
        }></Footer_menu>
        
      }></Footer>
        </>
  </div>
);

export {Pantry, Recipes};