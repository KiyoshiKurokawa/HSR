function enhanceStatus() {
    var enhance = document.getElementById("char-buff");
    enhance.classList.toggle("enhanced-enabled");

    var buffed = document.getElementById("buffed");
    buffed.classList.toggle("buffed-inactive")

    var unbuffed = document.getElementById("unbuffed");
    unbuffed.classList.toggle("unbuffed-active");
}
