function myFunction() {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.style.display === 'block') {
        myDropdown.style.display = 'none';
    } else {
        myDropdown.style.display = 'block';
    }
}

window.onload = function() {
    document.getElementById('gridChildOneTitle').classList.add('slideLeft');
    document.getElementById('gridChildFourTitle').classList.add('slideRight');
}


let fuentesChangeColor = document.querySelector('div.gridChildTwo');
fuentesChangeColor.onmouseover = function() {
    fuentesChangeColor.classList.remove('gridChildTwo');
    fuentesChangeColor.classList.add('gridChildTwoColor');
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
    fuentesChangeColor.classList.remove('gridChildTwoColor');
    fuentesChangeColor.classList.add('gridChildTwo'); 
    document.getElementById('camper').classList.remove('Rotate');
    document.getElementById('fuelGauge').classList.remove('Rotate');
    document.getElementById('ocean').classList.remove('Rotate');
    document.getElementById('highlight').classList.remove('highLight');
}

let interiorChangeColor = document.querySelector('div.gridChildThree');
interiorChangeColor.onmouseover = function() {
    interiorChangeColor.classList.remove('gridChildThree');
    interiorChangeColor.classList.add('gridChildThreeColor');
    document.getElementById('highlightO').classList.add('highLight');
    document.getElementById('solarPanel').classList.add('Rotate');
    setTimeout(() => {
       document.getElementById('battery').classList.add('Rotate'); 
    }, 200);
    setTimeout(() => {
            document.getElementById('charity').classList.add('Rotate');
    }, 400);
}


interiorChangeColor.onmouseout = function() {
    interiorChangeColor.classList.remove('gridChildThreeColor');
    interiorChangeColor.classList.add('gridChildThree'); 
    document.getElementById('solarPanel').classList.remove('Rotate');
    document.getElementById('battery').classList.remove('Rotate');
    document.getElementById('charity').classList.remove('Rotate');
    document.getElementById('highlightO').classList.remove('highLight');
}


