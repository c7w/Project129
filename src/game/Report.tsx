import { Fragment, useEffect, useRef } from "react";
import { Layer, Stage, Image, Text } from "react-konva";
import { useSelector } from "react-redux";
import { getRenderReport, getScore, getUsername } from "../app/store";

import r101 from "../assets/report_templates/文人.png";
import r102 from "../assets/report_templates/学生领袖.png";
import r103 from "../assets/report_templates/军人.png";
import r104 from "../assets/report_templates/学者.png";
import r105 from "../assets/report_templates/普通人.png";

import QR from "../assets/QR.png"

interface ReportProps {
    username: string;
}

const Report = (props: ReportProps) => {

    const stageRef = useRef(null);
    const username = useSelector(getUsername);
    const renderReport = useSelector(getRenderReport);
    const scoreSheet = useSelector(getScore);
    const image = useRef(new window.Image());
    const QRCode = useRef(new window.Image());

    const exportToImage = () => {

        QRCode.current.src = QR;
        switch (scoreSheet.next) {
            
            case 101:
                image.current.src = r101;
                break;
            case 102:
                image.current.src = r102;
                break;
            case 103:
                image.current.src = r103;
                break;
            case 104:
                image.current.src = r104;
                break;
            case 105:
                image.current.src = r105;
                break;
            default:
                image.current.src = r101;
                break;

        }
        
        const uri = (stageRef.current as any).toDataURL();
        document.getElementById("ReportImage")?.setAttribute('src', uri);
    };
    
    useEffect(()=>{
        if(renderReport) {
            var c = setInterval(exportToImage, 500);
        }
        
    }, [renderReport]);

    // useEffect(()=>{
    //     setInterval(exportToImage, 500);
    // }, []);

    return (
        <div className="Report" id="Report" style={{display: 'none'}} >
            <span className="ReportClose" onClick={()=>{var c; document.getElementById('Report')?.style.setProperty('display', 'none'); clearInterval(c);}}>×</span>
            <img alt="Report" id="ReportImage" src="" style={{userSelect: 'all'}}></img>
            <Fragment>
                <Stage width={1624} height={2648} style={{display: 'none'}} ref={stageRef} >
                    <Layer>
                        <Image x={0} y={0} image={image.current}></Image>
                        <Text text={username} fontSize={70} fontFamily="STHupo" align="center" x={360} y={240} width={315} height={70} />
                        <Image x={1394} y={2418} width={230} height={230} image={QRCode.current}></Image>
                    </Layer>
                </Stage>
            </Fragment>
        </div>
    );
};

export default Report;