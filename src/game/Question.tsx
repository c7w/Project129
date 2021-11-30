import { useDispatch, useSelector } from "react-redux";
import _ from "underscore";
import { getScore, getSelected, updateContentStatus, updateScore, updateSelected } from "../app/store";
import { notifyResult } from "../utils/Network";
import QUESTIONS, { Option } from "./Text";

interface QuestionProps {
    onEnd: () => void;
}

const Question = (props: QuestionProps) => {
    const dispatch = useDispatch();
    const scoreSheet = useSelector(getScore);

    const selected = useSelector(getSelected);

    const optionsElement : any = [];

    let optionsForCurr : Array<Option> = [];
    if(scoreSheet.next < 100) {
        optionsForCurr = QUESTIONS[scoreSheet.next - 1].options;
    }
    // optionsForCurr = _.shuffle(optionsForCurr);
    const choice = "ABCDEFG";
    let j = 0;
    for(const option of optionsForCurr) {
        optionsElement.push(<div className={"QuestionOption"} onClick={(event: any)=>{
            if (!selected) {
                // 先改一下颜色
                event.target.style.setProperty('color', 'red')
                dispatch(updateSelected(1));


                // 然后过一秒再处理翻页
                setTimeout(()=>{
                    event.target.style.setProperty('color', 'rgb(56,16,13)')
                    const newScoreSheet = option.next(scoreSheet);
                    if(newScoreSheet.next > 100) {
                        notifyResult(newScoreSheet.next);
                        dispatch(updateContentStatus(2));
                    }
                    dispatch(updateScore(newScoreSheet));
                    dispatch(updateSelected(0));
                }, 1000)
            }

        }} >
            {scoreSheet.next < 100 ? choice[j] + '. ' + option.option : ''}
        </div>)
    j++;
    }


    return (<div id={"QuestionBlock"} 
                className={"QuestionBlock"}
                style={{}}
            >
                <div className="QuestionDescription">
                    <p>　　{ scoreSheet.next < 100 ? QUESTIONS[scoreSheet.next - 1].question : ''}</p>
                </div>
                <div className="QuestionOptions">
                    {optionsElement}
                </div>
            </div>);
};

export default Question;
