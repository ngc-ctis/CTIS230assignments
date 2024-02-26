myitem = document.getElementById("firsttest");
thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");
textentry = document.getElementById("myinput");  
otherotheritem = document.getElementById("reservetext");

myitem.addEventListener("click", onClick);
thebutton.addEventListener("click", onButtonClick);
myitem.addEventListener("mouseout", MouseEvent);
textentry.addEventListener("change", onChange);
otherotheritem.addEventListener("click", onClick);

function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}

function onButtonClick() {
    otheritem.style.color = "red";
    otheritem.style.fontSize = "100px"
}

function onClick() {  
    myitem.style.color = "green";  
    myitem.style.fontSize = "36px";
    newtext = "Reservation Booked"
    otherotheritem.innerHTML = newtext;
}

function MouseEvent() {
    myitem.style.color = "";
    myitem.style.fontSize = "";
}