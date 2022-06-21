import React from "react";
import { Header } from "test-1-dalex/umd/organisms/header/Header";
import { Title } from "test-1-dalex/umd/molecules/title/Title";
import { Text } from "test-1-dalex/umd/atoms/text/Text";
import { Icon_container } from "test-1-dalex/umd/molecules/icon_container/Icon_container";
import { Image } from "test-1-dalex/umd/atoms/image/Image";
import { Empty_div } from "test-1-dalex/umd/atoms/empty_div/Empty_div";
import { Header_child } from "test-1-dalex/umd/molecules/header_child/Header_child";
import { Footer_menu } from "test-1-dalex/umd/molecules/footer_menu/Footer_menu";
import { Footer } from "test-1-dalex/umd/organisms/footer/Footer";
import { Card_infos } from "test-1-dalex/umd/organisms/card_infos/Card_infos";
import { Card_data } from "test-1-dalex/umd/organisms/card_data/Card_data";
import { Card_single_info } from "test-1-dalex/umd/molecules/card_single_info/Card_single_info";
import { Card_marca } from "test-1-dalex/umd/atoms/card_marca/Card_marca";
import { Card_title } from "test-1-dalex/umd/atoms/card_title/Card_title";
import { Card_image_container } from "test-1-dalex/umd/molecules/card_image_container/Card_image_container";
import { Card_image } from "test-1-dalex/umd/atoms/card_image/Card_image";
import { Card } from "test-1-dalex/umd/organisms/card/Card";
import { Cards_container } from "test-1-dalex/umd/organisms/cards_container/Cards_container";
import { Tag_icon } from "test-1-dalex/umd/atoms/tag_icon/Tag_icon";
import { Tag_title } from "test-1-dalex/umd/atoms/tag_title/Tag_title";
import { Tag } from "test-1-dalex/umd/organisms/tag/Tag";
import { Card_combo } from "test-1-dalex/umd/organisms/card_combo/Card_combo";
import { Input } from "test-1-dalex/umd/atoms/input/Input";
import { Search_box } from "test-1-dalex/umd/molecules/search_box/Search_box";
import { Card_account } from "test-1-dalex/umd/organisms/card_account/Card_account";
import { Summary_container } from "test-1-dalex/umd/organisms/summary_container/Summary_container";
import { Summary_info } from "test-1-dalex/umd/molecules/summary_info/Summary_info";
import ImagePeso from "../img/peso.svg";
import ImageTimer from "../img/timer.svg";
import ImageQuantità from "../img/quantità.svg";
import ImageFile from "../img/back.svg";
import ImageSettings from "../img/settings.svg";
import ImageHome from "../img/home.svg";
import ImagePantry from "../img/pantry.svg";
import ImageRecipes from "../img/recipes.svg";
import ImageAccount from "../img/account.svg";
import ImageCremaCarciofi from "../img/cremaCarciofi.png";
import ImageRaguContadino from "../img/raguContadino.png";
import ImageLeerdammer from "../img/leerdammer.png";
import ImageRosette from "../img/rosette.png";
import ImageUova from "../img/uova.png";
import ImageMozzarella from "../img/mozzarella.png";
import ImageGlutenFree from "../img/glutenFree.svg";
import ImageSearch from "../img/search.svg";
import ImagePasta from "../img/pasta.png";
import ImageuovaRicetta from "../img/uovaRicetta.png";
import ImageinsalatRicetta from "../img/insalataRicetta.png";
import ImagecremaCarciofiRicetta from "../img/cremaCarciofiRicetta.png";
import ImageKcal from "../img/kcal.svg";
import ImagePersons from "../img/persons.svg";
import ImageVegan from "../img/vegan.svg";
import ImagePaoloDalex from "../img/paolodalex.png";
import ImageSale from "../img/sale.svg";
import ImageZuccheri from "../img/zuccheri.svg";
import ImageGrassi from "../img/grassi.svg";
import ImageProteine from "../img/proteine.svg";
import ImageFibre from "../img/fibre.svg";
import ImageEdit from "../img/edit.svg";
import ImageTarget from "../img/target.svg";

import { Link } from "react-router-dom";

const Pantry = () => (
  <div>
    <>
      <Header
        children={
          <>
            <Header_child
              children={
                <Icon_container
                  children={<Image src={ImageFile}></Image>}
                ></Icon_container>
              }
            ></Header_child>

            <Title width_size="33.33%" children={<Text text="My pantry" />} />

            <Empty_div width_size="33.33%"></Empty_div>
          </>
        }
      ></Header>

      <Cards_container
        children={
          <>
            <Card>
              <>
                <Card_image_container back_color={"#418C43"}>
                  <Card_image src={ImageCremaCarciofi} />
                </Card_image_container>

                <Card_data>
                  <>
                    <Card_title text={"Crema carciofi"}></Card_title>
                    <Card_marca
                      text={"Knorr"}
                      class_style={"marca"}
                    ></Card_marca>

                    <Card_infos>
                      <>
                        <Card_single_info>
                          <Image src={ImagePeso} id={"peso"} />
                          <Card_marca
                            text={"250 g"}
                            class_style={"card_text"}
                          ></Card_marca>
                        </Card_single_info>
                      </>

                      <>
                        <Card_single_info>
                          <Image src={ImageQuantità} id={"quantità"} />
                          <Card_marca
                            text={"2"}
                            class_style={"card_text"}
                          ></Card_marca>
                        </Card_single_info>
                      </>
                      <>
                        <Card_single_info>
                          <Image src={ImageTimer} id={"timer"} />
                          <Card_marca
                            text={"25 min."}
                            class_style={"card_text"}
                          ></Card_marca>
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
                  <Card_image src={ImageRaguContadino} />
                </Card_image_container>

                <Card_data>
                  <>
                    <Card_title text={"Ragù contadino"}></Card_title>
                    <Card_marca
                      text={"Barilla"}
                      class_style={"marca"}
                    ></Card_marca>

                    <Card_infos>
                      <>
                        <Card_single_info>
                          <Image src={ImagePeso} id={"peso"} />
                          <Card_marca
                            text={"500 g"}
                            class_style={"card_text"}
                          ></Card_marca>
                        </Card_single_info>
                      </>
                      <>
                        <Card_single_info>
                          <Image src={ImageQuantità} id={"quantità"} />
                          <Card_marca
                            text={"1"}
                            class_style={"card_text"}
                          ></Card_marca>
                        </Card_single_info>
                      </>
                      <>
                        <Card_single_info>
                          <Image src={ImageTimer} id={"timer"} />
                          <Card_marca
                            text={"Pronto"}
                            class_style={"card_text"}
                          ></Card_marca>
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
                  <Card_image src={ImageLeerdammer} />
                </Card_image_container>

                <Card_data>
                  <>
                    <Card_title text={"Leerdammer"}></Card_title>
                    <Card_marca
                      text={"Leerdammer"}
                      class_style={"marca"}
                    ></Card_marca>

                    <Card_infos>
                      <>
                        <Card_single_info>
                          <Image src={ImagePeso} id={"peso"} />
                          <Card_marca
                            text={"350 g"}
                            class_style={"card_text"}
                          ></Card_marca>
                        </Card_single_info>
                      </>

                      <>
                        <Card_single_info>
                          <Image src={ImageQuantità} id={"quantità"} />
                          <Card_marca
                            text={"4"}
                            class_style={"card_text"}
                          ></Card_marca>
                        </Card_single_info>
                      </>
                      <>
                        <Card_single_info>
                          <Image src={ImageTimer} id={"timer"} />
                          <Card_marca
                            text={"Pronto"}
                            class_style={"card_text"}
                          ></Card_marca>
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
                  <Card_image src={ImageRosette} />
                </Card_image_container>

                <Card_data>
                  <>
                    <Card_title text={"Rosette"}></Card_title>
                    <Card_combo>
                      <Card_marca
                        text={"Schär"}
                        class_style={"marca"}
                      ></Card_marca>
                      <Tag
                        back_color={"#8E5A28"}
                        children={
                          <>
                            <Tag_icon>
                              <Image
                                src={ImageGlutenFree}
                                id={"gluten_free"}
                              ></Image>
                            </Tag_icon>
                            <Tag_title text={"Gluten free"}></Tag_title>
                          </>
                        }
                      ></Tag>
                    </Card_combo>

                    <Card_infos>
                      <>
                        <Card_single_info>
                          <Image src={ImagePeso} id={"peso"} />
                          <Card_marca
                            text={"500 g"}
                            class_style={"card_text"}
                          ></Card_marca>
                        </Card_single_info>
                      </>

                      <>
                        <Card_single_info>
                          <Image src={ImageQuantità} id={"quantità"} />
                          <Card_marca
                            text={"5"}
                            class_style={"card_text"}
                          ></Card_marca>
                        </Card_single_info>
                      </>
                      <>
                        <Card_single_info>
                          <Image src={ImageTimer} id={"timer"} />
                          <Card_marca
                            text={"8 min."}
                            class_style={"card_text"}
                          ></Card_marca>
                        </Card_single_info>
                      </>
                    </Card_infos>
                  </>
                </Card_data>
              </>
            </Card>

            <Card>
              <>
                <Card_image_container back_color={"#83D261"}>
                  <Card_image src={ImageUova} id={"uova"} />
                </Card_image_container>

                <Card_data>
                  <>
                    <Card_title text={"Uova"}></Card_title>
                    <Card_marca
                      text={"Coccodì"}
                      class_style={"marca"}
                    ></Card_marca>

                    <Card_infos>
                      <>
                        <Card_single_info>
                          <Image src={ImagePeso} id={"peso"} />
                          <Card_marca
                            text={"500 g"}
                            class_style={"card_text"}
                          ></Card_marca>
                        </Card_single_info>
                      </>

                      <>
                        <Card_single_info>
                          <Image src={ImageQuantità} id={"quantità"} />
                          <Card_marca
                            text={"6"}
                            class_style={"card_text"}
                          ></Card_marca>
                        </Card_single_info>
                      </>
                      <>
                        <Card_single_info>
                          <Image src={ImageTimer} id={"timer"} />
                          <Card_marca
                            text={"Pronta"}
                            class_style={"card_text"}
                          ></Card_marca>
                        </Card_single_info>
                      </>
                    </Card_infos>
                  </>
                </Card_data>
              </>
            </Card>

            <Card>
              <>
                <Card_image_container back_color={"#FEFFEA"}>
                  <Card_image src={ImageMozzarella} />
                </Card_image_container>

                <Card_data>
                  <>
                    <Card_title text={"Mozzarella"}></Card_title>
                    <Card_marca
                      text={"Vallelata"}
                      class_style={"marca"}
                    ></Card_marca>

                    <Card_infos>
                      <>
                        <Card_single_info>
                          <Image src={ImagePeso} id={"peso"} />
                          <Card_marca
                            text={"265 g"}
                            class_style={"card_text"}
                          ></Card_marca>
                        </Card_single_info>
                      </>

                      <>
                        <Card_single_info>
                          <Image src={ImageQuantità} id={"quantità"} />
                          <Card_marca
                            text={"1"}
                            class_style={"card_text"}
                          ></Card_marca>
                        </Card_single_info>
                      </>
                      <>
                        <Card_single_info>
                          <Image src={ImageTimer} id={"timer"} />
                          <Card_marca
                            text={"Pronta "}
                            class_style={"card_text"}
                          ></Card_marca>
                        </Card_single_info>
                      </>
                    </Card_infos>
                  </>
                </Card_data>
              </>
            </Card>
          </>
        }
      ></Cards_container>

      <Footer
        children={
          <Footer_menu
            children={
              <>
                <Image src={ImageHome} id="home"></Image>
                <Link to="/">
                  <Image src={ImagePantry} id="pantry" status="active"></Image>
                </Link>
                <Link to="/recipes">
                  <Image src={ImageRecipes} id="recipes"></Image>
                </Link>
                <Link to="/account">
                  <Image src={ImageAccount} id="account"></Image>
                </Link>
              </>
            }
          ></Footer_menu>
        }
      ></Footer>
    </>
  </div>
);

const Recipes = () => (
  <div>
    <>
      <Header
        children={
          <>
            <Header_child
              children={
                <Icon_container
                  children={<Image src={ImageFile}></Image>}
                ></Icon_container>
              }
            ></Header_child>

            <Title width_size="33.33%" children={<Text text="Recipes" />} />

            <Header_child
              children={
                <Icon_container
                  children={<Image src={ImageSettings} id={"settings"}></Image>}
                ></Icon_container>
              }
            ></Header_child>
          </>
        }
      ></Header>

      <Search_box>
        <Image src={ImageSearch} id={"search"}></Image>
        <Input
          id={"searchRecipes"}
          placeholder={"Search here..."}
          isValid={undefined}
          type={"text"}
          onData={function () {
            const input = document.getElementById("searchRecipes");
            var cards = document.getElementsByClassName("card");

            for (let i = 0; i < cards.length; i++) {
              input.value.replaceAll(" ", "_");
              if (
                cards[i].id.includes(
                  input.value.replaceAll(" ", "_").toLowerCase()
                )
              ) {
                cards[i].style.display = "flex";
              } else {
                cards[i].style.display = "none";
              }
            }
          }}
        ></Input>
      </Search_box>

      <Cards_container>
        <Card id={"pasta_al_sugo"}>
          <>
            <Card_image_container back_color={"#418C43"}>
              <Card_image src={ImagePasta} styleClass={"ricetta"} />
            </Card_image_container>

            <Card_data>
              <>
                <Card_title text={"Pasta al sugo"}></Card_title>
                <Card_marca
                  text={"By GialloZafferano"}
                  class_style={"marca"}
                ></Card_marca>

                <Card_infos>
                  <>
                    <Card_single_info>
                      <Image src={ImageKcal} id={"quantità"} />
                      <Card_marca
                        text={"324 Kcal"}
                        class_style={"card_text"}
                      ></Card_marca>
                    </Card_single_info>
                  </>

                  <>
                    <Card_single_info>
                      <Image src={ImagePersons} id={"timer"} />
                      <Card_marca
                        text={"5"}
                        class_style={"card_text"}
                      ></Card_marca>
                    </Card_single_info>
                  </>
                  <>
                    <Card_single_info>
                      <Image src={ImageTimer} id={"timer"} />
                      <Card_marca
                        text={"16 min."}
                        class_style={"card_text"}
                      ></Card_marca>
                    </Card_single_info>
                  </>
                </Card_infos>
              </>
            </Card_data>
          </>
        </Card>

        <Card id={"crema_carciofi"}>
          <>
            <Card_image_container back_color={"#AA3C24"}>
              <Card_image
                src={ImagecremaCarciofiRicetta}
                styleClass={"ricetta"}
              />
            </Card_image_container>

            <Card_data>
              <>
                <Card_title text={"Crema carciofi"}></Card_title>
                <Card_combo>
                  <Card_marca
                    text={"By Knorr"}
                    class_style={"marca"}
                  ></Card_marca>
                  <Tag
                    back_color={"#418C43"}
                    children={
                      <>
                        <Tag_icon>
                          <Image src={ImageVegan} id={"vegan"}></Image>
                        </Tag_icon>
                        <Tag_title text={"Vegan"}></Tag_title>
                      </>
                    }
                  ></Tag>
                </Card_combo>

                <Card_infos>
                  <>
                    <Card_single_info>
                      <Image src={ImageKcal} id={"quantità"} />
                      <Card_marca
                        text={"154 Kcal"}
                        class_style={"card_text"}
                      ></Card_marca>
                    </Card_single_info>
                  </>

                  <>
                    <Card_single_info>
                      <Image src={ImagePersons} id={"timer"} />
                      <Card_marca
                        text={"3"}
                        class_style={"card_text"}
                      ></Card_marca>
                    </Card_single_info>
                  </>
                  <>
                    <Card_single_info>
                      <Image src={ImageTimer} id={"timer"} />
                      <Card_marca
                        text={"8 min."}
                        class_style={"card_text"}
                      ></Card_marca>
                    </Card_single_info>
                  </>
                </Card_infos>
              </>
            </Card_data>
          </>
        </Card>

        <Card id={"pane tostato con uovo"}>
          <>
            <Card_image_container back_color={"#EFC516"}>
              <Card_image src={ImageuovaRicetta} styleClass={"ricetta"} />
            </Card_image_container>

            <Card_data>
              <>
                <Card_title text={"Pane tostato con uovo"}></Card_title>
                <Card_combo>
                  <Card_marca
                    text={"By BurroFuso"}
                    class_style={"marca"}
                  ></Card_marca>
                  <Tag
                    back_color={"#8E5A28"}
                    children={
                      <>
                        <Tag_icon>
                          <Image
                            src={ImageGlutenFree}
                            id={"gluten_free"}
                          ></Image>
                        </Tag_icon>
                        <Tag_title text={"Gluten free"}></Tag_title>
                      </>
                    }
                  ></Tag>
                </Card_combo>
                <Card_infos>
                  <>
                    <Card_single_info>
                      <Image src={ImageKcal} id={"quantità"} />
                      <Card_marca
                        text={"280 Kcal"}
                        class_style={"card_text"}
                      ></Card_marca>
                    </Card_single_info>
                  </>

                  <>
                    <Card_single_info>
                      <Image src={ImagePersons} id={"timer"} />
                      <Card_marca
                        text={"1"}
                        class_style={"card_text"}
                      ></Card_marca>
                    </Card_single_info>
                  </>
                  <>
                    <Card_single_info>
                      <Image src={ImageTimer} id={"timer"} />
                      <Card_marca
                        text={"6 min."}
                        class_style={"card_text"}
                      ></Card_marca>
                    </Card_single_info>
                  </>
                </Card_infos>
              </>
            </Card_data>
          </>
        </Card>
        <Card id={"insalata mista"}>
          <>
            <Card_image_container back_color={"#E8D6BB"}>
              <Card_image src={ImageinsalatRicetta} styleClass={"ricetta"} />
            </Card_image_container>

            <Card_data>
              <>
                <Card_title text={"Insalata mista"}></Card_title>
                <Card_combo>
                  <Card_marca
                    text={"By Alex"}
                    class_style={"marca"}
                  ></Card_marca>
                  <Tag
                    back_color={"#418C43"}
                    children={
                      <>
                        <Tag_icon>
                          <Image src={ImageVegan} id={"vegan"}></Image>
                        </Tag_icon>
                        <Tag_title text={"Vegan"}></Tag_title>
                      </>
                    }
                  ></Tag>
                </Card_combo>

                <Card_infos>
                  <>
                    <Card_single_info>
                      <Image src={ImageKcal} id={"quantità"} />
                      <Card_marca
                        text={"90 Kcal"}
                        class_style={"card_text"}
                      ></Card_marca>
                    </Card_single_info>
                  </>

                  <>
                    <Card_single_info>
                      <Image src={ImagePersons} id={"timer"} />
                      <Card_marca
                        text={"1"}
                        class_style={"card_text"}
                      ></Card_marca>
                    </Card_single_info>
                  </>
                  <>
                    <Card_single_info>
                      <Image src={ImageTimer} id={"timer"} />
                      <Card_marca
                        text={"3 min."}
                        class_style={"card_text"}
                      ></Card_marca>
                    </Card_single_info>
                  </>
                </Card_infos>
              </>
            </Card_data>
          </>
        </Card>
      </Cards_container>

      <Footer
        children={
          <Footer_menu
            children={
              <>
                <Image src={ImageHome} id="home"></Image>
                <Link to="/">
                  <Image src={ImagePantry} id="pantry"></Image>
                </Link>
                <Link to="/recipes">
                  <Image
                    src={ImageRecipes}
                    id="recipes"
                    status="active"
                  ></Image>
                </Link>
                <Link to="/account">
                  <Image src={ImageAccount} id="account"></Image>
                </Link>
              </>
            }
          ></Footer_menu>
        }
      ></Footer>
    </>
  </div>
);

const Account = () => (
  <div>
    <>
      <Header
        children={
          <>
            <Header_child
              children={
                <Icon_container
                  children={<Image src={ImageFile}></Image>}
                ></Icon_container>
              }
            ></Header_child>

            <Title width_size="33.33%" children={<Text text="Account" />} />

            <Header_child
              children={
                <Icon_container
                  children={<Image src={ImageSettings} id={"settings"}></Image>}
                ></Icon_container>
              }
            ></Header_child>
          </>
        }
      ></Header>

      <Card_account
        children={
          <>
            <br />
            <Card_title text={"PaoloDalex"}></Card_title>
            <br />
            <Card_image
              src={ImagePaoloDalex}
              styleClass={"ricetta"}
            ></Card_image>
            <Tag
              back_color={"#080C2F"}
              children={
                <>
                  <Image src={ImageEdit} id={"edit"}></Image>
                  <Tag_title text={"Edit profile"}></Tag_title>
                </>
              }
            ></Tag>
          </>
        }
      ></Card_account>

      <Card_title text={"Week summary"} id={"week_summary"}></Card_title>

      <Summary_container>
        <Summary_info>
          <Card_combo id={"kcal_summary"}>
            <Image src={ImageKcal} id={"quantità"}></Image>
            <Card_marca
              class_style={"summary_text"}
              text={"512 Kcal"}
            ></Card_marca>
          </Card_combo>
        </Summary_info>

        <Summary_info>
          <Card_combo id={"sale_summary"}>
            <Image src={ImageSale} id={"timer"}></Image>
            <Card_marca class_style={"summary_text"} text={"20 g"}></Card_marca>
          </Card_combo>
        </Summary_info>
      </Summary_container>

      <Summary_container>
        <Summary_info>
          <Card_combo id={"proteine_summary"}>
            <Image src={ImageProteine} id={"timer"}></Image>
            <Card_marca class_style={"summary_text"} text={"42 g"}></Card_marca>
          </Card_combo>
        </Summary_info>

        <Summary_info>
          <Card_combo id={"zuccheri_summary"}>
            <Image src={ImageZuccheri} id={"peso"}></Image>
            <Card_marca class_style={"summary_text"} text={"32 g"}></Card_marca>
          </Card_combo>
        </Summary_info>
      </Summary_container>

      <Summary_container>
        <Summary_info>
          <Card_combo id={"fibre_summary"}>
            <Image src={ImageFibre} id={"timer"}></Image>
            <Card_marca class_style={"summary_text"} text={"52 g"}></Card_marca>
          </Card_combo>
        </Summary_info>

        <Summary_info>
          <Card_combo id={"grassi_summary"}>
            <Image src={ImageGrassi} id={"timer"}></Image>
            <Card_marca class_style={"summary_text"} text={"82 g"}></Card_marca>
          </Card_combo>
        </Summary_info>
      </Summary_container>

      <br />
      <br />
      <br />
      <br />

      <Tag
        back_color={"#080C2F"}
        id={"target"}
        children={
          <>
            <Card_image src={ImageTarget} id={"target_icon"}></Card_image>
            <Tag_title text={"Edit targets"}></Tag_title>
          </>
        }
      ></Tag>

      <Footer
        children={
          <Footer_menu
            children={
              <>
                <Image src={ImageHome} id="home"></Image>
                <Link to="/">
                  <Image src={ImagePantry} id="pantry"></Image>
                </Link>
                <Link to="/recipes">
                  <Image src={ImageRecipes} id="recipes"></Image>
                </Link>
                <Link to="/account">
                  <Image
                    src={ImageAccount}
                    id="account"
                    status="active"
                  ></Image>
                </Link>
              </>
            }
          ></Footer_menu>
        }
      ></Footer>
    </>
  </div>
);

export { Pantry, Recipes, Account };
