var coll = document.getElementsByClassName("collap");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
       this.classList.toggle("active");
       var content = this.nextElementSibling;
       if (content.style.maxHeight) {
           content.style.maxHeight = null;
       } else {
           content.style.maxHeight = content.scrollHeight + "px";
       }
    });
}

var coll = document.getElementsByClassName("lc-collap");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

var coll = document.getElementsByClassName("stat-collap");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
