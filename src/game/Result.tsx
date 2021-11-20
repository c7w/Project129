import { ChangeEvent, ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import { getScore } from "../app/store";

import c101 from "../assets/characters/文人.png";
import c102 from "../assets/characters/学生.png";
import c103 from "../assets/characters/军官.png";
import c104 from "../assets/characters/科学家.png";
import c105 from "../assets/characters/普通人.png";



const Result = ()=>{

    const scoreSheet = useSelector(getScore);
    const [name, setName] = useState("");
    const onInputChange = (event: ChangeEvent<HTMLInputElement>) : void=>{
        setName(event.target.value);
    }

    let desp = ""
    let character : ReactElement = <></>;
    switch(scoreSheet.next) {
        case 101:
            desp = "宣传工作者";
            character = <img alt="" src={c101} className="ResultImage"></img>;
            break;
        case 102:
            desp = "学生运动领袖";
            character = <img alt="" src={c102} className="ResultImage"></img>;
            break;
        case 103:
            desp = "贡献卓越的军人";
            character = <img alt="" src={c103} className="ResultImage"></img>;
            break;
        case 104:
            desp = "科学救国的学者";
            character = <img alt="" src={c104} className="ResultImage"></img>;
            break;
        case 105:
            desp = "直接的见证者";
            character = <img alt="" src={c105} className="ResultImage"></img>;
            break;
    }

    return <div className="Result">
        <div className="ResultStats">
            <p>一二·九的你，是——</p>
            <p style={{fontSize: '1.8rem'}}>{desp}</p>
            {character}
        </div>
        <div className="ResultInput">
            <p>请在下方输入您的名字</p>
            <input id="ResultName" onChange = {onInputChange}></input>
        </div>
        <div className="ResultReport" onClick={()=>{
            console.debug(123); 
            alert('报告还没做' + name);
            }}>
            <p>获取专属报告</p>
        </div>
        
    </div>
};
export default Result;