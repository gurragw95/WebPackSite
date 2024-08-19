function createMenu(){

    const contentDiv = document.querySelector("#content");   


    

    //Creates a main div below the header.
    const mainInfoDiv = document.createElement("div");
    mainInfoDiv.id = "menuMainInfoDiv";
    contentDiv.appendChild(mainInfoDiv);
    mainInfoDiv.style.display = "flex";
    mainInfoDiv.style.justifyContent = "center";


    //Adds a rectangular sub-div
    const subMainDiv = document.createElement("div");
    mainInfoDiv.appendChild(subMainDiv);
    subMainDiv.style.minHeight = "250px";
    subMainDiv.style.minWidth = "250px";
    subMainDiv.style.maxWidth = "950px";
    subMainDiv.style.flex = "1";
    subMainDiv.style.borderRadius = "30px";
    subMainDiv.style.display = "flex";
    subMainDiv.style.alignItems = "center";
    subMainDiv.style.flexDirection = "column";

    //Adds a header within the sub-div
    const menuHeader = document.createElement("Div");
    subMainDiv.appendChild(menuHeader);
    menuHeader.textContent = "MENU";
    menuHeader.style.minWidth = "150px";
    menuHeader.style.maxWidth = "250px";
    menuHeader.style.backgroundColor = "grey";
    menuHeader.style.height = "50px";
    menuHeader.style.textAlign = "center";
    menuHeader.style.marginTop = "50px";
    menuHeader.style.borderRadius = "12px";

    //Adds the menu contents inside a div
    const menuContents = document.createElement("div");
    subMainDiv.appendChild(menuContents);
    menuContents.style.backgroundColor = "lightgrey";
    menuContents.style.minWidth = "650px";
    menuContents.style.maxWidth = "90%";
    menuContents.style.minHeight = "350px";
    menuContents.style.marginTop = "50px";
    menuContents.style.marginBottom = "50px";
    menuContents.style.borderRadius = "12px";

    
    
    

}

export { createMenu };