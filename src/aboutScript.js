function createAbout(){

    const contentDiv = document.querySelector("#content");   


    

    //Creates a main div below the header.
    const mainInfoDiv = document.createElement("div");
    mainInfoDiv.id = "aboutMainInfoDiv";
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
    const aboutHeader = document.createElement("Div");
    subMainDiv.appendChild(aboutHeader);
    aboutHeader.textContent = "ABOUT";
    aboutHeader.style.minWidth = "150px";
    aboutHeader.style.maxWidth = "250px";
    aboutHeader.style.backgroundColor = "grey";
    aboutHeader.style.height = "50px";
    aboutHeader.style.textAlign = "center";
    aboutHeader.style.marginTop = "50px";
    aboutHeader.style.borderRadius = "12px";

    //Adds the about contents inside a div
    const aboutContents = document.createElement("div");
    subMainDiv.appendChild(aboutContents);
    aboutContents.style.backgroundColor = "lightgrey";
    aboutContents.style.minWidth = "650px";
    aboutContents.style.maxWidth = "90%";
    aboutContents.style.minHeight = "350px";
    aboutContents.style.marginTop = "50px";
    aboutContents.style.marginBottom = "50px";
    aboutContents.style.borderRadius = "12px";

    
    
    

}

export { createAbout };