
// ADD PAINTBRUSH LINKS UPPER CORNER RIGHT
// ----------------------------------------------------------
let navLink = document.querySelectorAll('.navLink');
navLink.forEach(element => {
element.onmouseover = function() {  
    element.classList.add('selected');
}});
// ADD PAINTBRUSH LINKS UPPER CORNER RIGHT
navLink.forEach(element => {
    element.onmouseout = function() {  
        element.classList.remove('selected');
}});
// ----------------------------------------------------------


window.onload = function() {
    document.getElementById('upperLeftChild').classList.add('slideLeft');
    document.getElementById('downRightChild').classList.add('slideRight');
}


let fuentesChangeColor = document.querySelector('div.upperRight');
fuentesChangeColor.onmouseover = function() {
    fuentesChangeColor.classList.remove('upperRight');
    fuentesChangeColor.classList.add('upperRightColor');
    document.getElementById('highlight').classList.add('highLight');
    document.getElementById('camper').classList.add('Rotate');
    setTimeout(() => {
       document.getElementById('fuelGauge').classList.add('Rotate'); 
    }, 200);
    setTimeout(() => {
            document.getElementById('ocean').classList.add('Rotate');
    }, 400);
}


fuentesChangeColor.onmouseout = function() {
    fuentesChangeColor.classList.remove('upperRightColor');
    fuentesChangeColor.classList.add('upperRight'); 
    document.getElementById('camper').classList.remove('Rotate');
    document.getElementById('fuelGauge').classList.remove('Rotate');
    document.getElementById('ocean').classList.remove('Rotate');
    document.getElementById('highlight').classList.remove('highLight');
}

let interiorChangeColor = document.querySelector('div.downLeft');
interiorChangeColor.onmouseover = function() {
    interiorChangeColor.classList.remove('downLeft');
    interiorChangeColor.classList.add('downLeftColor');
    document.getElementById('highlightOffice').classList.add('highLight');
    document.getElementById('solarPanel').classList.add('Rotate');
    setTimeout(() => {
       document.getElementById('battery').classList.add('Rotate'); 
    }, 200);
    setTimeout(() => {
            document.getElementById('charity').classList.add('Rotate');
    }, 400);
}


interiorChangeColor.onmouseout = function() {
    interiorChangeColor.classList.remove('downLeftColor');
    interiorChangeColor.classList.add('downLeft'); 
    document.getElementById('solarPanel').classList.remove('Rotate');
    document.getElementById('battery').classList.remove('Rotate');
    document.getElementById('charity').classList.remove('Rotate');
    document.getElementById('highlightOffice').classList.remove('highLight');
}


var eventTriggered = false;

window.addEventListener("scroll", function() {
    if (!eventTriggered && (window.scrollY >= 800  )) {
        let element = document.querySelector(".charityTitle");
        let otherElement = document.querySelector(".charityDiv")
        element.classList.remove("charityTitle");
        element.classList.add("charityOpacity");
        otherElement.classList.remove('charityDiv');
        otherElement.classList.add('charityDivOpacity');
        // setTimeout(() => {
        //     element.classList.remove("static");
        //     element.classList.add('fade-in');
        //     let newDivRight = document.createElement('div');
        //     newDivRight.innerHTML = "Play with me! choose a skill on your left to read more...";
        //     newDivRight.classList.add('newDivRight');
        //     element.appendChild(newDivRight);
        // }, 1500);
        
        eventTriggered = true;
    }
});