
//Loads the initial content, and headers.
function loadSite(){

    
    const para = document.createElement("p");
    const contentDiv = document.querySelector("#content");
    const header = document.createElement("header");
    const navBar = document.createElement("nav");
    const menuButtonDiv = document.createElement("div");
    const aboutButtonDiv = document.createElement("div");


    contentDiv.appendChild(header);
    header.appendChild(navBar);

    navBar.style.display = "flex";
    navBar.style.justifyContent = "center";
    navBar.style.backgroundColor = "lightgrey";
    navBar.style.height = "50px";
    navBar.style.gap = "10px";

    navBar.appendChild(menuButtonDiv);
    menuButtonDiv.textContent = "Menu";
    menuButtonDiv.style.textAlign = "center";
    menuButtonDiv.style.display = "flex";
    menuButtonDiv.style.alignItems = "center";
    menuButtonDiv.id = "menuButtonDiv";
    menuButtonDiv.style.width = "70px";
    menuButtonDiv.style.justifyContent = "center";

  
    navBar.appendChild(aboutButtonDiv);
    aboutButtonDiv.textContent = "About";
    aboutButtonDiv.id = "aboutButtonDiv";
    aboutButtonDiv.style.textAlign = "center";
    aboutButtonDiv.style.display = "flex";
    aboutButtonDiv.style.alignItems = "center";
    aboutButtonDiv.style.justifyContent = "center";
    aboutButtonDiv.style.width = "70px";

    // Add hover effects
    menuButtonDiv.addEventListener("mouseover", function() {
        menuButtonDiv.style.backgroundColor = "gray";
    });
    menuButtonDiv.addEventListener("mouseout", function() {
        menuButtonDiv.style.backgroundColor = "";
    });

    aboutButtonDiv.addEventListener("mouseover", function() {
        aboutButtonDiv.style.backgroundColor = "gray";
    });
    aboutButtonDiv.addEventListener("mouseout", function() {
        aboutButtonDiv.style.backgroundColor = "";
    });


}


export { loadSite };