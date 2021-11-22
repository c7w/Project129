
const updateReport = (username, result = 105) => {

    console.debug(123);

    let modalImg = document.getElementById("ReportImage");
    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');
    let swidth = 1624; //保存的图片宽度
    let sheight = 2648;

    canvas.height = sheight;
    canvas.width = swidth;
    let myImage = new Image();
    let QR = new Image();
    QR.src = 'report_templates/QR.png';
    switch (result) {
        case 101:
            myImage.src = 'report_templates/文人.png';
            break;
        case 102:
            myImage.src = "report_templates/学生领袖.png"
            break;
        case 103:
            myImage.src = "report_templates/军人.png"
            break;
        case 104:
            myImage.src = "report_templates/学者.png"
            break;
        case 105:
            myImage.src = "report_templates/普通人.png"
            break;
        default:
            myImage.src = "report_templates/普通人.png"
            break;
    }
    myImage.crossOrigin = 'Anonymous';

    myImage.onload = function () {
        context.drawImage(myImage, 0, 0, swidth, sheight);
        context.drawImage(QR, 1394, 2418, 230, 230);

        context.font = "75px KaiTi";
        context.textAlign = 'center';
        context.fillText(username.slice(0, 4), 520, 305);

        //img1.src = canvas.toDataURL("image/png");
        modalImg.src = canvas.toDataURL("image/png");
    }
};

export {updateReport};