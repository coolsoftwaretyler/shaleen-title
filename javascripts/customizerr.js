function customizeFont() {
    var fontSelect = document.getElementById("font-select");
    var selectedFont = fontSelect.options[fontSelect.selectedIndex].value;
    var body = document.getElementsByTagName("BODY")[0]; 
    body.style.fontFamily = selectedFont.toString();
}

function customizeColor() {
    var colorSelect = document.getElementById("color-select");
    console.log("Selected color is: " + colorSelect.options[colorSelect.selectedIndex].value);
    console.log("Current color is: ");
}