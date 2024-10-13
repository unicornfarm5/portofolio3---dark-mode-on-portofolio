console.log("script loaded")

//darkmode
//finder elementer
const modeToggleButton = document.getElementById("mode-toggle")
const bodyElement = document.body;


//toggle er en funktion som kan skrive mellem to tilstande
//inspireret af chatGPT
function toggleMode() {
    bodyElement.classList.toggle("dark-mode");
}


//eventlistener skrifter tema når man klikker på knappen
modeToggleButton.addEventListener("click",toggleMode);