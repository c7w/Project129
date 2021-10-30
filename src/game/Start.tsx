import { useState } from "react";

const StartGame = ()=>{
    const [op, setOp] = useState(1);
    const [dis, setDis] = useState('block');
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
            setTimeout(()=>{setDis('none')}, 1000);
        }} 
    />
};

export default StartGame;