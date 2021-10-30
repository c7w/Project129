import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { getScore } from "../app/store";


const Result = ()=>{

    const score = useSelector(getScore);
    const [name, setName] = useState("");
    const onInputChange = (event: ChangeEvent<HTMLInputElement>) : void=>{
        setName(event.target.value);
    }

    return <div className="Result">
        <div className="ResultStats">
            <p>您是dadadadada</p>
            <p>分数是{score}</p>
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