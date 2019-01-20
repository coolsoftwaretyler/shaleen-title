function customize() {
    var fontSelect = document.getElementById("font-select");
    var colorSelect = document.getElementById("color-select");
    
    console.log(fontSelect.options[fontSelect.selectedIndex].value);
    console.log(colorSelect.options[colorSelect.selectedIndex].value);
}