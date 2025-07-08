document.getElementById("defaultOpen").click();

function openContent(evt, contentName) {
    var i, tabcontent, contentlink;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    contentlink = document.getElementsByClassName("contentlink");
    for (i = 0; i < contentlink.length; i++) {
        contentlink[i].className = contentlink[i].className.replace(" active", "");
    }

    document.getElementById(contentName).style.display = "block";
    evt.currentTarget.className += " active";
}
