import { Fragment, useEffect, useRef } from "react";
import { Layer, Stage, Image, Text } from "react-konva";
import { useSelector } from "react-redux";
import { getRenderReport, getScore, getUsername } from "../app/store";
import { updateReport } from "./SharePNG";


interface ReportProps {
    username: string;
}

const Report = (props: ReportProps) => {

    const username = useSelector(getUsername);
    const scoreSheet = useSelector(getScore);
    const renderReport = useSelector(getRenderReport);

    // useEffect(()=>{
    //     setInterval(exportToImage, 500);
    // }, []);

    useEffect(()=>{
        if(renderReport) {
            updateReport(scoreSheet.next);
        }
    }, [renderReport]);

    return (
        <div className="Report" id="Report" style={{display: 'none'}} >
            <span className="ReportClose" onClick={()=>{var c; document.getElementById('Report')?.style.setProperty('display', 'none'); clearInterval(c);}}>×</span>
            <img alt="Report" id="ReportImage" src="" style={{userSelect: 'all'}}></img>
            {/* <Fragment>
                <Stage width={1624} height={2648} style={{display: 'none'}} ref={stageRef} >
                    <Layer>
                        <Image x={0} y={0} image={image.current}></Image>
                        <Text text={username} fontSize={70} fontFamily="STHupo" align="center" x={360} y={240} width={315} height={70} />
                        <Image x={1394} y={2418} width={230} height={230} image={QRCode.current}></Image>
                    </Layer>
                </Stage>
            </Fragment> */}
            <canvas id="myCanvas" width="1624" height="2648" style={{visibility: 'hidden', display: 'none'}}></canvas>
        </div>
    );
};

export default Report;