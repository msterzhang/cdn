function MueuOpen() {
    var div = document.getElementById("Tf-Wp");
    if (div.classList.contains("open")) {
        div.classList.remove("open");
    } else {
        div.classList.add("open");
        document.getElementById("HdTop").classList.remove("open");
    }
}

function SerarchOpen() {
    var div = document.getElementById("HdTop");
    console.log(div.classList.contains("open"));
    if (div.classList.contains("open")===true) {
        div.classList.remove("open");
    } else {
        div.classList.add("open");
        document.getElementById("Tf-Wp").classList.remove("open");
    }
}