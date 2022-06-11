import React from "react";
import { Text } from "test-1-dalex/atoms/text/Text";
import { Paragraph } from "test-1-dalex/molecules/paragraph/Paragraph";
import { Title } from "test-1-dalex/molecules/title/Title";
const App = () => ( 
    <div>
        <Title children={<Text text ="questo è un titolo"/>}/>
        <Paragraph children={<Text text="provaa" />} />
        <Text text="ciao"/>
    </div>
);

export default App;