CreateCanvas(windowWidth, windowHeight);
CanvasBackground("#41425b");

const r1L = document.querySelector(".Rod1");
const r2L = document.querySelector(".Rod2");
const M1 = document.querySelector(".Mass1");
const M2 = document.querySelector(".Mass2");
const gr = document.querySelector(".gravity");


const r1V = document.querySelector(".rangeValueR1");
const r2V = document.querySelector(".rangeValueR2");

const m1V = document.querySelector(".rangeValueM1");
const m2V = document.querySelector(".rangeValueM2");


const gV = document.querySelector(".rangeValueG");

let hue = 0;


let x0 = windowWidth / 1.5;
let y0 = 250;
let g = 1;

let l1 = 125,
    l2 = 125,
    m1 = 5,
    m2 = 5,
    a1 = Math.random() * Math.PI - 0.5 * Math.PI,
    a2 = Math.random() * Math.PI * 2,
    x1 = x0 + l1 * Math.sin(a1),
    y1 = y0 + l1 * Math.cos(a1),
    x2 = x1 + l2 * Math.sin(a2),
    y2 = y1 + l2 * Math.cos(a2),
    craduis = 25,
    a1_v = 0,
    a2_v = 0,
    acceleration1 = 0,
    acceleration2 = 0;

let pathArray = [];
class path {
    constructor(p1, p2, color) {
        this.x = p1;
        this.y = p2;
        this.color = color;
    }

    draw() {
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, 3, 0, Math.PI * 2, false);

        c.fill();
    }
}


function pushtoArray1(p1, p2, color) {
    pathArray.push(new path(p1, p2, color));
    for (let i = 0; i < pathArray.length; i++) {
        pathArray[i].draw();
    }
}



r1L.oninput = function() {
    l1 = r1L.value;
    r1V.textContent = r1L.value;
}

r2L.oninput = function() {
    l2 = r2L.value;
    r2V.textContent = r2L.value;

}

M1.oninput = function() {
    m1 = M1.value;
    m1V.textContent = M1.value;
}
M2.oninput = function() {
    m2 = M2.value;
    m2V.textContent = M2.value;

}

gr.oninput = function() {
    g = gr.value;
    gV.textContent = gr.value;

}





function animate() {

    requestAnimationFrame(animate);


    c.fillStyle = "rgba(65, 66, 91, 0.4)";
    c.fillRect(0, 0, windowWidth, windowHeight);
    pushtoArray1(x2, y2, `hsl(${hue} , 100% , 80%)`);
    hue += 0.5;
    if (pathArray.length > 1000) {
        // alert("The path will be cleared due to memory usage");
        pathArray.shift();
    }

    x1 = x0 + l1 * Math.sin(a1);
    y1 = y0 + l1 * Math.cos(a1);
    x2 = x1 + l2 * Math.sin(a2);
    y2 = y1 + l2 * Math.cos(a2);

    //nuemerator 1 
    let n1 = -g * (2 * m1 + m2) * Math.sin(a1) - m2 * g * Math.sin(a1 - (2 * a2)) -
        2 * Math.sin(a1 - a2) * m2 * (a2_v * a2_v * l2 + a1_v * a1_v * l1 * Math.cos(a1 - a2));
    //denomenator 1
    let d1 = l1 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));
    //acceleration1
    let acceleration1 = n1 / d1;

    //nuemerator 2

    let n2 = 2 * Math.sin(a1 - a2) * (a1_v * a1_v * l1 * (m1 + m2) + g * (m1 + m2) *
        Math.cos(a1) + a2_v * a2_v * l2 * m2 * Math.cos(a1 - a2));
    //denomenator 1

    let d2 = l2 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));



    let acceleration2 = n2 / d2;



    a1_v += acceleration1;
    a2_v += acceleration2;
    a1 += a1_v;
    a2 += a2_v;



    // console.log(pathArray)
    // console.log(acceleration1)
    // console.log(acceleration2)
    c.beginPath();
    c.strokeStyle = "white";
    c.moveTo(x0, y0);
    c.lineTo(x1, y1);
    c.stroke();
    c.beginPath();
    c.fillStyle = "cyan";
    c.arc(x1, y1, craduis, 0, Math.PI * 2, false);
    c.fill();


    c.beginPath();
    c.strokeStyle = "white";
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.stroke();
    c.beginPath();
    c.fillStyle = "white";
    c.arc(x2, y2, craduis, 0, Math.PI * 2, false);
    c.fill();

    //call functions
    // pushtoArray1(x1, y1, "cyan")

}

animate();