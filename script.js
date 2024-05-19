const canvas = document.querySelector("#canvas");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const sizeEl = document.querySelector("#size");
const colorEl = document.querySelector("#color");
const eraseBtn = document.querySelector("#erase");
const clearEl = document.querySelector("#clear");
const ctx = canvas.getContext("2d");

let size = 20;
let x = undefined;
let y = undefined;
let color = "black";
let ispressed = false;
canvas.addEventListener("mousedown",(e) =>{
    ispressed = true;
    x = e.offsetX;
    y = e.offsetY;
});
canvas.addEventListener("mouseup",(e) =>{
    ispressed = false;
    x = undefined;
    y = undefined;
});
canvas.addEventListener("mousemove",(e)=>{
    if(ispressed){
     const x2 = e.offsetX;
     const y2 = e.offsetY;
     drawLine(x, y, x2, y2);
     x= x2;
     y= y2;
     drawCircle(x2,y2); 
    }
});

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}
/////we want to make clean lines btw circles
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

decreaseBtn.addEventListener("click",()=>{
    size-= 5;
    if(size<5){
        size =1;
    }
    updateSizeOnScreen();
    
});
increaseBtn.addEventListener("click",()=>{
    size+= 5;
    if(size>100){
        size =100;
    }
    updateSizeOnScreen();
});

eraseBtn.addEventListener("click",() =>{
   color = "white";
   
});
clearEl.addEventListener("click",()=>{
    ctx.clearRect(0,0, canvas.width,canvas.height); //cleans the canvas
})

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}
colorEl.addEventListener("change",(e)=>{
    color = e.target.value;

});


/*function draw(){
    ctx.clearRect(0,0, canvas.width,canvas.height);
    drawCircle(x,y);
    requestAnimationFrame(draw);
}
draw();*/












