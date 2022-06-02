canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
backgroundimage="mars.jpg"
roverimage="rover.png"
roverx=10
rovery=10
roverwidth=100
roverheight=100

function add()
{
    backgroundimgtag=new Image()
    backgroundimgtag.onload=uploadbackground
    backgroundimgtag.src=backgroundimage;

    roverimgtag=new Image()
    roverimgtag.onload=uploadrover
    roverimgtag.src=roverimage;
}

function uploadbackground(){
    ctx.drawImage(backgroundimgtag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(roverimgtag,roverx,rovery,roverwidth,roverheight)
}
window.addEventListener("keydown" ,my_keydown)

function my_keydown(e){
    keypress=e.keycode

    if(keypress=="37"){
        left()
    }
    if(keypress=="38"){
        up()
    }
    if(keypress=="39"){
        right()
    }
    if(keypress=="40"){
        down()
    }
}

function up(){
    if (rovery> 0){
        rovery=rovery -10
        uploadbackground()
        uploadrover()
    }
}
function left (){
    if (roverx > 0){
        roverx=roverx-10
        uploadbackground()
        uploadrover()
    }
}
function down (){
    if (rovery < 500){
        rovery=rovery +10
        uploadbackground()
        uploadrover()
    }
}
function right (){
    if (roverx < 700){
        roverx=roverx +10
        uploadbackground()
        uploadrover()
    }
}

