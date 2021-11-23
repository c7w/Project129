
var r101 = new Image();
var r102 = new Image();
var r103 = new Image();
var r104 = new Image();
var r105 = new Image();
var QR = new Image();

r101.src = 'report_templates/文人.png';
r102.src = "report_templates/学生领袖.png"
r103.src = "report_templates/军人.png";
r104.src = "report_templates/学者.png";
r105.src = "report_templates/普通人.png";
QR.src = 'report_templates/QR.png';

console.debug("preload");

const updateReport = ( result = 105) => {

    console.debug(123);

    const username = document.getElementById("ResultName").value;

    let modalImg = document.getElementById("ReportImage");
    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');
    let swidth = 1624; //保存的图片宽度
    let sheight = 2648;

    canvas.height = sheight;
    canvas.width = swidth;
    let myImage;
    switch (result) {
        case 101:
            myImage = r101;
            break;
        case 102:
            myImage = r102;
            break;
        case 103:
            myImage = r103;
            break;
        case 104:
            myImage = r104;
            break;
        case 105:
            myImage = r105;
            break;
        default:
            myImage = r105;
            break;
    }
    // myImage.crossOrigin = 'Anonymous';

    // myImage.onload = function () {
    context.drawImage(myImage, 0, 0, swidth, sheight);
    context.drawImage(QR, 1394, 2418, 230, 230);

    context.font = "80px fz";
    context.textAlign = 'center';
    context.fillText(username.slice(0, 4), 520, 300);

    //img1.src = canvas.toDataURL("image/png");
    modalImg.src = canvas.toDataURL("image/png");
    document.getElementById("Report")?.style.setProperty("display", 'block');
    // }
};

export {updateReport};