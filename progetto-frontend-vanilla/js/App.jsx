import React from "react";
import {Text} from "test-1-dalex/atoms/text/Text";
import { Paragraph } from "test-1-dalex/molecules/paragraph/Paragraph";
const App = () => ( 
    <div>
        <Paragraph children={<Text text="provaa" />} />
        <Text text="ciao"/>
    </div>
);

export default App;