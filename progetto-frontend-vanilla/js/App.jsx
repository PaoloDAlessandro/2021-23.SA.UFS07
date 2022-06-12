import React from "react";
import { Text } from "test-1-dalex/atoms/text/Text";
import { Paragraph } from "test-1-dalex/molecules/paragraph/Paragraph";
import { Title } from "test-1-dalex/molecules/title/Title";
import { Image } from "test-1-dalex/atoms/image/Image";
import { Icon_container } from "test-1-dalex/molecules/icon_container/Icon_container";

const App = () => ( 
    <div>
        <Icon_container children={<Image src="../img/back.svg"></Image>}></Icon_container>
        
        <Title children={<Text text ="My pantry"/>}/>
    </div>
);

export default App;