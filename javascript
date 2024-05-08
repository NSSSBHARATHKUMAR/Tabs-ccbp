let aboutTabElement = document.getElementById('aboutTab');
let timeTovisitTabElement =document.getElementById("timeToVisitTab");
let attractionsTabElement = document.getElementById('attractionsTab');
let aboutButtonElement = document.getElementById('aboutButton');
let timeToVisitButtonElement = document.getElementById('timeToVisitButton');
let attractionsButtonElement = document.getElementById('attractionsButton');

timeTovisitTabElement.className = 'd-none';
attractionsTabElement.className = 'd-none';
function aboutBtn() {
    aboutTabElement.className = 'd-block';
    timeToVisitButtonElement.className = 'd-none';
    attractionsTabElement.className = 'd-none';
    timeToVisitButtonElement.style.backgroundColor = "#dae2ec";
    attractionsButtonElement.style.backgroundColor = '#dae2ec';
    aboutButtonElement.style.backgroundColor = '#ffffff';
    aboutButtonElement.style.borderWidth = '0px';
    aboutButtonElement.style.border = 'none';
    aboutButtonElement.style.outline = 'none';
}

function timeToVisitBtn() {
    aboutTabElement.className = 'd-none';
    timeTovisitTabElement.className = 'd-inline';
    attractionsTabElement.className = 'd-none';
    aboutButtonElement.style.backgroundColor = '#dae2ec';
    timeToVisitButtonElement.style.backgroundColor = '#ffffff';
    timeToVisitButtonElement.style.borderWidth = '0px';
    timeToVisitButtonElement.style.border = 'none';
    timeToVisitButtonElement.style.outline = 'none';
    attractionsButtonElement.style.backgroundColor = '#dae2ec';
}

function attractionsBtn() {
    aboutTabElement.className = 'd-none';
    timeTovisitTabElement.className = ' d-none';
    attractionsTabElement.className = 'd-block';
    aboutButtonElement.style.backgroundColor = '#dae2ec';
    timeToVisitButtonElement.style.backgroundColor = '#dae2ec';
    attractionsButtonElement.style.backgroundColor = '#ffffff';
    attractionsButtonElement.style.borderWidth = '0px';
    attractionsButtonElement.style.border = 'none';
    attractionsButtonElement.style.outline = 'none';
}
