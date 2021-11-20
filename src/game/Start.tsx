import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContentStatus } from "../app/store";

const StartGame = ()=>{
    const [op, setOp] = useState(1);
    const [dis, setDis] = useState('block');
    const dispatch = useDispatch();
    return <div 
        className="Start" 
        style={{
            position: 'absolute', 
            height: '100%', 
            width: '100%', 
            opacity: op,
            display: dis
        }} 
        onClick={()=>{
            setOp(0); 
            setTimeout(()=>{setDis('none'); dispatch(updateContentStatus(1))}, 1500);
        }} 
    />
};

export default StartGame;