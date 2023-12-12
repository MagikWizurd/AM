var color1 = ""


function changeColor(col){
    color1 = col
}

window.addEventListener("load",()=> {

const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

canvas.height = window.innerHeight
canvas.width=window.innerWidth

let painting = false
function startPos(e){
painting=true
draw(e)
}

function endPos(e){
painting=false
ctx.beginPath()
}

function draw(e) {
    if (!painting) return
    ctx.lineWidth=10
    ctx.lineCap = "round"
    ctx.strokeStyle = color1
    ctx.lineTo(e.clientX,e.clientY)
    ctx.stroke()
}

canvas.addEventListener("mousedown",startPos)
canvas.addEventListener("mouseup",endPos)
canvas.addEventListener("mousemove",draw)



})