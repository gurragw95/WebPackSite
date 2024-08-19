import "./styles.css";
import "./pageLoad.js";
import { loadSite } from "./pageLoad.js";
import { createMenu } from "./menuScript.js";
import { createAbout } from "./aboutScript.js";


//Loads the main structure of divs, as well as the menu.
loadSite();

//Creates object for main container.
const contentDiv = document.querySelector("#content");

//Adds event listeners to run the scripts.
const menuButtonDiv = document.querySelector("#menuButtonDiv");

//Adds an event listener in order to create the menu page.
menuButtonDiv.addEventListener("click", ()=> {

    let menuExists = document.getElementById("menuMainInfoDiv");
    let aboutExists = document.getElementById("aboutMainInfoDiv");
    
    //Only creates the menu page if it does not exist.
    if(menuExists != null){
        alert("Aldready exists!");
    } else if(aboutExists != null){
        contentDiv.removeChild(aboutExists);
        createMenu();
    } else {
        createMenu();
    }

    menuExists = "";
    
})

//Adds event listeners to run the scripts.
const aboutButtonDiv = document.querySelector("#aboutButtonDiv");

//Adds an event listener in order to create the menu page.
aboutButtonDiv.addEventListener("click", ()=> {

    let menuExists = document.getElementById("menuMainInfoDiv");
    let aboutExists = document.getElementById("aboutMainInfoDiv");
    
    //If the menu page exists, removes it first.
    if(menuExists != null){
        contentDiv.removeChild(menuExists);
        createAbout();
    } else if(aboutExists != null) {
        alert("About already exists.")
    } else {
        createAbout();
    }

    menuExists = "";
    aboutExists = "";
    
})



