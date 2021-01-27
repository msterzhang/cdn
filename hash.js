(function(){
    window.setInterval(isConsoleOpen, 1000 * 2);
})();

function isConsoleOpen() {
    if(
        window.outerWidth - window.innerWidth > 20 ||
        window.outerHeight - window.innerHeight > 100){
        // window.location.href="/";
    }
}

