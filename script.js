"use strict";
let darkMode = false;

function toggleDarkMode(){
    //Invert the value of darkMode.
    darkMode = !darkMode
    if (darkMode == false){
        document.getElementById("test").style.background = "#F7F6F2";
        invertColor("fa-brands", "black")
        invertColor2("gridElement", "#F0E5CF")
        invertColor("text", "black")
    } else if (darkMode == true){
        document.getElementById("test").style.background = "#393E46";
        invertColor("fa-brands", "#FFD369")
        invertColor2("gridElement", "#222831")
        invertColor("text", "#EEEEEE")
        document.getElementById("element1").style.boxShadow = "10px 10px 5px lightgray";
    }
}

//Function to invert the color of all elements in a class.
function invertColor(className, color){
    const collection = document.getElementsByClassName(className);
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = color;
    }
}

function invertColor2(className, color){
    const collection = document.getElementsByClassName(className);
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.background = color;
    }
}