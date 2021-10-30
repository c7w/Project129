import { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const Content = () => {
    const [status, setStatus] = useState(1);
    return(
        <div className="GameContent">
            <div style={{display: status===1?'block':'none'}}>
                <Question onEnd={()=>{setStatus(2);}} />
            </div>
            <div style={{display: status===2?'block':'none'}}>
                <Result />
            </div>
            
        </div>
    );
};

export default Content;