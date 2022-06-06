function $(identifier, all = false) {
    return all ? document.querySelectorAll(identifier) : document.querySelector(identifier);
 }

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
 }

let colors = [
    "30,30,30",
    "40,40,40",
    "50,50,50",
    "60,60,60",
    "70,70,70",
    "80,80,80",
    "90,90,90",
    "100,100,100",
    "125,125,125",
    "150,150,150",
    "175,175,175",
    "200,200,200",
    "255,100,0",
]
 
function createBg(row, cells = 0) {
    let background = $("#background");
    
    for (let i = 0; i < row; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < cells; j++) {
            row.appendChild(createCell());
        }
        background.appendChild(row);
     }
}
 
function createCell() {
    let col = document.createElement("div");
    col.classList.add("col");
    col.classList.add("onHover");
    return col;
}


window.onload = () => {
    createBg(20, 10);
    let list = $("#background .col", true);
    for (let i = 0; i < list.length; i++) {
        let color = colors[randomInt(0, colors.length-1)];
        list[i].style.backgroundColor = `rgba(${color})`;
        list[i].addEventListener("mouseover", () => {
            list[i].style.backgroundColor = `black`;
        });
        list[i].addEventListener("mouseleave", () => {
            list[i].style.backgroundColor = `rgba(${color})`;
        });
    }
 }
