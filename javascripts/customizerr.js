function customizeFont() {
    var fontSelect = document.getElementById("font-select");
    var selectedFont = fontSelect.options[fontSelect.selectedIndex].value;
    var body = document.getElementsByTagName("BODY")[0]; 
    body.style.fontFamily = selectedFont.toString();
}

function customizeColor() {
    var colorSelect = document.getElementById("color-select");
    var selectedColor = colorSelect.options[colorSelect.selectedIndex].value;
    var navLinks = document.getElementsByClassName("page-link");
    var siteTitle = document.getElementsByClassName("site-title");
    var footerLinks = document.getElementsByClassName("footer__link");
    var links = document.getElementsByTagName("A"); 

    for (link of navLinks) {
        link.classList.remove("hover--blue");
        link.classList.remove("hover--green");
        link.classList.remove("hover--magenta");
        link.classList.add("hover--" + selectedColor);
    }
    for (link of siteTitle) {
        link.classList.remove("hover--blue");
        link.classList.remove("hover--green");
        link.classList.remove("hover--magenta");
        link.classList.add("hover--" + selectedColor);
    }
    for (link of footerLinks) {
        link.classList.remove("hover--blue");
        link.classList.remove("hover--green");
        link.classList.remove("hover--magenta");
        link.classList.add("hover--" + selectedColor);
    }
    for (link of links) {
        if (link.classList.length < 1) {
        link.classList.remove("hover--blue");
        link.classList.remove("hover--green");
        link.classList.remove("hover--magenta");
        link.classList.remove("color--blue");
        link.classList.remove("color--green");
        link.classList.remove("color--magenta");
        link.classList.remove("visited--blue");
        link.classList.remove("visited--green");
        link.classList.remove("visited--magenta");
        link.classList.add("color--" + selectedColor);
        link.classList.add("hover--" + selectedColor);
        link.classList.add("visited--" + selectedColor);
        }   
    }
}