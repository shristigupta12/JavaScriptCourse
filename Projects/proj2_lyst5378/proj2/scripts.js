const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

console.log(window.getComputedStyle(pink).backgroundColor);

const getBgColor = (selectedElement)=>{
    return window.getComputedStyle(selectedElement).backgroundColor;
}

// var violetELementColor = getBgColor(violet);

// violet.addEventListener("mouseenter", ()=>{
//     center.style.background = violetELementColor;
// });

const magicColorChanger = (e, color) =>{
    return e.addEventListener("mouseenter", ()=>{
        center.style.background = color;
    });
}
magicColorChanger(red, getBgColor(red));
magicColorChanger(cyan, getBgColor(cyan));
magicColorChanger(violet, getBgColor(violet));
magicColorChanger(orange, getBgColor(orange));
magicColorChanger(pink, getBgColor(pink));