import "../styles/styles.css"
import Content from "./Content";
import Start from "./Start";

const Game = ()=>{
    return (<div className="Game">
        <Start />
        <Content />
    </div>);
};

export default Game;