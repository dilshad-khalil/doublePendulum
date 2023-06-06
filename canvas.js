//the height and the width of the window 
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

//craeting a canva in the html page 
const canvas = document.createElement("canvas");

//assiging the canvas id to canvas
canvas.id = "canvas";

const body = document.body;
//appending it to the page

body.append(canvas);


//getting the 2D context in javaScript
const c = canvas.getContext("2d");

//creating a funtion for the canvas

function CreateCanvas(canvasWidth, canvasHeight) {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
}

//a variable to store the color as a string and pass it to the cBackground function



//a function the assigns the canvas Background color to the color that the user enters in the function as an argument
function CanvasBackground(backGroundColor) {
    canvas.style.backgroundColor = backGroundColor;
}


//and object with the name Mouse that contains the x and y cordinate for the mouse
let Mouse = {
    x: undefined,
    y: undefined
};



//a functin that creates an arc 

function Arc(x, y, radius, startAngle, endAngle, clockWise, fillColor) {
    c.beginPath();
    c.fillStyle = fillColor;
    c.arc(x, y, radius, startAngle, endAngle, clockWise)
    c.fill();

}

//PI Constant
let PI = Math.PI;

function Dx(x1, x2) {
    return x1 - x2;
}

function Dy(y2, y2) {
    return y1 - y2;
}