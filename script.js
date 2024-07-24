window.onload = function() {
    filterSelection("all");
}

function filterSelection(c) {
    var x, y, i, j;
    x = document.getElementsByClassName("image");
    y = document.getElementsByClassName("tab");

    for (j = 0; j < y.length; j++) {
        RemoveClass(y[j], "active");
        if (y[j].className.indexOf(c) > -1) {
            AddClass(y[j], "active");
        }
    }

    if (c == "all") {
        c = "";
    }

    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) {
            AddClass(x[i], "show");
        }
    }
}

function AddClass(element, name) {
    element.classList.add(name);
}

function RemoveClass(element, name) {
    element.classList.remove(name);
}