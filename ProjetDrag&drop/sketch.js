/*
https://vimeo.com/channels/learningp5js/138327548
*/


var clicked1 = false;
var clicked2 = false;
var clicked3 = false;
var clicked4 = false;
var clicked5 = false;
var o1 = false;
var o2 = false;
var o3 = false;
var o4 = false;
var o5 = false;
var MONEY = 100;
/* NOTES
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var img = new Image();
canvas.style.backgroundColor = ("turquoise");
img.src = 'images/linkcartoon.png';
ctx.beginPath();
ctx.fillStyle = "red";

ctx.arc(ObjetX, ObjetY, 50, 0, 2 * Math.PI, true);
ctx.fill();
ctx.closePath();
img.onload = function () {
    ctx.drawImage(img, 100, 100, 100, 100); }
*/
function setup() {
    createCanvas(1000, 700);
    background(300, 200, 100);
    fill(300, 250, 200);
    rect(0,0,100,700);



    var ctx = defaultCanvas.getContext("2d");
    fill(50, 50, 50);
    ctx.font = "20pt Calibri,Geneva,Arial";
    ctx.fillText(MONEY,50,650);
    //création des images/objet

    var img = new Image();
    img.src = 'images/linkcartoon.png';
    img.onload = function () {
    ctx.drawImage(img, 0, 0, 100, 100);}

    var img2 = new Image();
    img2.src = 'images/Zelda.png';
    img2.onload = function () {
    ctx.drawImage(img2, 0, 100, 100, 100);}

    var img3 = new Image();
    img3.src = 'images/Ganondorf.png';
    img3.onload = function () {
    ctx.drawImage(img3, 0, 200, 100, 100);}

    var img4 = new Image();
    img4.src = 'images/Skullkid.png';
    img4.onload = function () {
    ctx.drawImage(img4, 0, 300, 100, 100);}

    var img5 = new Image();
    img5.src = 'images/Navi.png';
    img5.onload = function () {
    ctx.drawImage(img5, 0, 400, 100, 100);}

}

// mousePressed function
function mousePressed() {
    if(mouseX >= 10 && mouseX <= 90 && mouseY >= 10 && mouseY <= 90){
        clicked1 = true;
    }
    if(mouseX >= 10 && mouseX <= 90 && mouseY >= 110 && mouseY <= 190){
        clicked2 = true;
    }
    if(mouseX >= 10 && mouseX <= 90 && mouseY >= 210 && mouseY <= 290){
        clicked3 = true;
    }
    if(mouseX >= 10 && mouseX <= 90 && mouseY >= 310 && mouseY <= 390){
        clicked4 = true;
    }
    if(mouseX >= 10 && mouseX <= 90 && mouseY >= 410 && mouseY <= 490){
        clicked5 = true;
    }

}
//mouseReleased function
function mouseReleased() {

    clicked1= false;
    clicked2= false;
    clicked3= false;
    clicked4= false;
    clicked5= false;

    //remise a zero de la page
    var ctx = defaultCanvas.getContext("2d");
    background(300, 200, 100);
    fill(300, 250, 200);
    rect(0,0,100,700);

    var img = new Image();
    img.src = 'images/linkcartoon.png';
    ctx.drawImage(img, 0, 0, 100, 100);

    var img2 = new Image();
    img2.src = 'images/Zelda.png';
    ctx.drawImage(img2, 0, 100, 100, 100);

    var img3 = new Image();
    img3.src = 'images/Ganondorf.png';
    ctx.drawImage(img3, 0, 200, 100, 100);

    var img4 = new Image();
    img4.src = 'images/Skullkid.png';
    ctx.drawImage(img4, 0, 300, 100, 100);

    var img5 = new Image();
    img5.src = 'images/Navi.png';
    ctx.drawImage(img5, 0, 400, 100, 100);

    if(mouseX <= 150){
        o1=false;
        o2=false;
        o3=false;
        o4=false;
        o5=false;
    }

    if (o1 == true){var img = new Image();
        img.src = 'images/linkcartoon.png';
        ctx.drawImage(img, mouseX-50, mouseY-50, 100, 100);
        o1=false;}

    if (o2 == true){var img2 = new Image();
        img2.src = 'images/Zelda.png';
        ctx.drawImage(img2, mouseX-50, mouseY-50, 100, 100);
        o2 = false;}

    if (o3 == true){var img3 = new Image();
        img3.src = 'images/Ganondorf.png';
        ctx.drawImage(img3, mouseX-50, mouseY-50, 100, 100);
        o3 =false; }

    if (o4 == true){var img4 = new Image();
        img4.src = 'images/Skullkid.png';
        ctx.drawImage(img4, mouseX-50, mouseY-50, 100, 100);
        o4=false;}

    if (o5 == true){var img5 = new Image();
        img5.src = 'images/Navi.png';
        ctx.drawImage(img5, mouseX-50, mouseY-50, 100, 100);
        o5=false;}



}


// draw function
function draw() {
    //
    if (clicked1 == true) {

        background(300, 200, 100);
        fill(300, 250, 200);
        o1= true;
        rect(0,0,100,700);

        var ctx = defaultCanvas.getContext("2d");

        var img = new Image();
        img.src = 'images/linkcartoon.png';
        ctx.drawImage(img, mouseX-50, mouseY-50, 100, 100);

        var img2 = new Image();
        img2.src = 'images/Zelda.png';
        ctx.drawImage(img2, 0, 100, 100, 100);

        var img3 = new Image();
        img3.src = 'images/Ganondorf.png';
        ctx.drawImage(img3, 0, 200, 100, 100);

        var img4 = new Image();
        img4.src = 'images/Skullkid.png';
        ctx.drawImage(img4, 0, 300, 100, 100);

        var img5 = new Image();
        img5.src = 'images/Navi.png';
        ctx.drawImage(img5, 0, 400, 100, 100);

    }

    if (clicked2 == true) {

        background(300, 200, 100);
        fill(300, 250, 200);
        o2=true;
        rect(0,0,100,700);

        var ctx = defaultCanvas.getContext("2d");

        var img2 = new Image();
        img2.src = 'images/Zelda.png';
        ctx.drawImage(img2, mouseX-50, mouseY-50, 100, 100);

        var img = new Image();
        img.src = 'images/linkcartoon.png';
        ctx.drawImage(img, 0, 0, 100, 100);

        var img3 = new Image();
        img3.src = 'images/Ganondorf.png';
        ctx.drawImage(img3, 0, 200, 100, 100);

        var img4 = new Image();
        img4.src = 'images/Skullkid.png';
        ctx.drawImage(img4, 0, 300, 100, 100);

        var img5 = new Image();
        img5.src = 'images/Navi.png';
        ctx.drawImage(img5, 0, 400, 100, 100);

    }

    if (clicked3 == true) {

        background(300, 200, 100);
        fill(300, 250, 200);
        o3=true;
        rect(0,0,100,700);

        var ctx = defaultCanvas.getContext("2d");

        var img3 = new Image();
        img3.src = 'images/Ganondorf.png';
        ctx.drawImage(img3, mouseX-50, mouseY-50, 100, 100);

        var img1 = new Image();
        img1.src = 'images/linkcartoon.png';
        ctx.drawImage(img1, 0, 0, 100, 100);

        var img2 = new Image();
        img2.src = 'images/Zelda.png';
        ctx.drawImage(img2, 0, 100, 100, 100);

        var img4 = new Image();
        img4.src = 'images/Skullkid.png';
        ctx.drawImage(img4, 0, 300, 100, 100);

        var img5 = new Image();
        img5.src = 'images/Navi.png';
        ctx.drawImage(img5, 0, 400, 100, 100);

    }

    if (clicked4 == true) {

        background(300, 200, 100);
        fill(300, 250, 200);
        o4 =true;
        rect(0,0,100,700);

        var ctx = defaultCanvas.getContext("2d");

        var img4 = new Image();
        img4.src = 'images/Skullkid.png';
        ctx.drawImage(img4, mouseX-50, mouseY-50, 100, 100);

        var img1 = new Image();
        img1.src = 'images/linkcartoon.png';
        ctx.drawImage(img1, 0, 0, 100, 100);

        var img2 = new Image();
        img2.src = 'images/Zelda.png';
        ctx.drawImage(img2, 0, 100, 100, 100);

        var img3 = new Image();
        img3.src = 'images/Ganondorf.png';
        ctx.drawImage(img3, 0, 200, 100, 100);

        var img5 = new Image();
        img5.src = 'images/Navi.png';
        ctx.drawImage(img5, 0, 400, 100, 100);

    }

    if (clicked5 == true) {

        background(300, 200, 100);
        fill(300, 250, 200);
        o5=true;
        rect(0,0,100,700);

        var ctx = defaultCanvas.getContext("2d");

        var img5 = new Image();
        img5.src = 'images/Navi.png';
        ctx.drawImage(img5, mouseX-50, mouseY-50, 100, 100);

        var img1 = new Image();
        img1.src = 'images/linkcartoon.png';
        ctx.drawImage(img1, 0, 0, 100, 100);

        var img2 = new Image();
        img2.src = 'images/Zelda.png';
        ctx.drawImage(img2, 0, 100, 100, 100);

        var img3 = new Image();
        img3.src = 'images/Ganondorf.png';
        ctx.drawImage(img3, 0, 200, 100, 100);

        var img4 = new Image();
        img4.src = 'images/Skullkid.png';
        ctx.drawImage(img4, 0, 300, 100, 100);

    }


}





