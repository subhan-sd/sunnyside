console.log("ini terhubung");
// var x = window.matchMedia("(max-width:575px)");

function myFunction(x) {
    if(x.matches){
        console.log("Anjayyy");
        // document.body.style.background="black";
        document.getElementById('nav').style.display="none";
        // document.getElementById('background').innerHTML="<img src='images/mobile/image-header.jpg' alt=''></img>";
        // document.getElementById('egg').innerHTML="<img src='images/mobile/image-transform.jpg' alt=''></img>";
        // document.getElementById('glasess').innerHTML="<img src='images/mobile/image-stand-out.jpg' alt=''></img>";
        // document.getElementById('chery').innerHTML="<img src='images/mobile/image-graphic-design.jpg' alt=''></img>";
        // document.getElementById('orange').innerHTML="<img src='images/mobile/image-photography.jpg' alt=''></img>";

    }else{
        document.getElementById('nav').style.display="flex";
        console.log("ahahah");
        // document.getElementById('background').innerHTML="<img src='images/desktop/image-header.jpg' alt=''></img>";
        // document.getElementById('egg').innerHTML="<img src='images/desktop/image-transform.jpg' alt=''></img>";
        // document.getElementById('glasess').innerHTML="<img src='images/desktop/image-stand-out.jpg' alt=''></img>";
        // document.getElementById('chery').innerHTML="<img src='images/desktop/image-graphic-design.jpg' alt=''></img>";
        // document.getElementById('orange').innerHTML="<img src='images/desktop/image-photography.jpg' alt=''></img>";
    }
}
var x = window.matchMedia("(max-width:700px)");
x.addListener(myFunction)