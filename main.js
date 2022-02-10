canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
 array=["nasa_1.jpg","nasa_2.jpg","nasa_3.jpg","nasa_4.jpg","mars.jpg"];
randomnumber=Math.floor(Math.random()*5);
console.log(randomnumber);
background_image=array[randomnumber];
rover_image="rover.png";
rover_x= 10;
rover_y=10;
function add(){
background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_image;
rover_imgTag= new Image();
rover_imgTag.onload=uploadrover;
rover_imgTag.src=rover_image;
}
function uploadBackground() {
    ctx.drawimage(background_imgTAG,0,0,canvas.width,canvas.height);
}
function uploadrover () {
    ctx.drawimage(rover_imgTAG,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown);
function my_keydown (e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keypressed=='38'){
        up();
        console.log("up");

    }
    if (keypressed=='40'){
        down();
        console.log("down");

    }
    if (keypressed=='37'){
        left();
        console.log("left");

    }
    if (keypressed=='39'){
        right();
        console.log("right");

    }
}
function  up() {
    if (rover_y>=0) {
        console.log("when up arrow is pressed, x="+rover_x+"and y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down() {
    if (rover_y<=500) {
        rover_y=rover_y+10;
        console.log("when down arrow is pressed, x="+rover_x+"and y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left() {
    if (rover_x>=10){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed, x="+rover_x+"and y="+rover_y);
        uploadBackground();
        uploadrover();
    }

}
function right() {
    if (rover_x<=700) {
        rover_x=rover_x-10;
        console.log("when right arrow is pressed, x="+rover_x+"and y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}