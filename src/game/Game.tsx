import { useEffect } from "react";
import "../styles/styles.css"
import { notifyStart } from "../utils/Network";
import Content from "./Content";
import Start from "./Start";

const Game = ()=>{

    useEffect(()=>{
        notifyStart();
    }, []);

    return (<div className="Game">
        <Start />
        <Content />
    </div>);
};

export default Game;