import { useDispatch, useSelector } from "react-redux";
import { getContentStatus, getUsername, updateContentStatus } from "../app/store";
import Question from "./Question";
import Report from "./Report";
import Result from "./Result";

const Content = () => {
    const status = useSelector(getContentStatus);
    const dispatch = useDispatch();
    const username = useSelector(getUsername);
    return(
        <div className="GameContent">
            <div style={{display: status===1?'block':'none', opacity: status===1? 1 : 0}}>
                <Question onEnd={()=>{dispatch(updateContentStatus(2));}} />
            </div>
            <div style={{display: status===2?'block':'none'}}>
                <Result />
            </div>
            <Report username={username}/>
            
        </div>
    );
};

export default Content;