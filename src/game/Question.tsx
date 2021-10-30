import { randomFillSync, randomInt } from "crypto";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "underscore";
import { getSelected, updateScore, updateSelected } from "../app/store";

interface QuestionProps {
    onEnd: () => void;
}

const QuestionList = JSON.parse('[{"question":"questionA","options":[{"马上报警":1},{"现在报警":2},{"立刻报警":3},{"总之报警":4},{"还是报警":5}]},{"question":"questionB","options":[{"马上报警":1},{"现在报警":2},{"立刻报警":3},{"总之报警":4}]},{"question":"questionC","options":[{"马上报警":1},{"现在报警":2},{"立刻报警":3},{"总之报警":4}]},{"question":"questionD","options":[{"马上报警":1},{"现在报警":2},{"立刻报警":3},{"总之报警":4}]},{"question":"questionE","options":[{"马上报警":1},{"立刻报警":3},{"总之报警":4}]}]');

const Question = (props: QuestionProps) => {
    const dispatch = useDispatch();
    
    const [index, setIndex] = useState(0);
    const [questionList, setQuestionList] = useState(_.shuffle(QuestionList));

    const selected = useSelector(getSelected);

    const QuestionElementList : any = [];

    let i = 0;
    for (const question of questionList) {
        const optionsElement : any = [];
        let j = 0;
        for(const option of (question as any).options) {
            const answer = Object.keys(option)[0];
            const currScore : any = Object.values(option)[0];
            // eslint-disable-next-line no-loop-func
            optionsElement.push(<div className={"QuestionOption"} id={"QuestionOption-"+i+'-'+j} onClick={(event: any)=>{
                if (!selected) {
                    // 先改一下颜色
                    event.target.style.setProperty('background-color', 'yellow')
                    dispatch(updateSelected(1));

                    dispatch(updateScore(currScore));
                    // 然后过一秒再处理翻页
                    setTimeout(()=>{
                        if(index === QuestionList.length-1){
                            props.onEnd();
                        }
                        setIndex(index+1)
                        dispatch(updateSelected(0));
                    }, 1000)
                }

            }} key={"Answer-"+j}>
                {answer}
            </div>)
            j++;
        }


        QuestionElementList.push(
            <div id={"QuestionBlock-"+i} 
                className={"QuestionBlock"}
                key={"Question-"+i} 
                style={{display: (index === i) ? 'block' : 'none'}}
            >
                <div className="QuestionDescription">
                    <p>{(question as any).question}</p>
                </div>
                <div className="QuestionOptions">
                    {optionsElement}
                </div>
            </div>
        );

        i++;
    }
    
    

    return (<div className="Question">
        {QuestionElementList}
    </div>)
};

export default Question;
