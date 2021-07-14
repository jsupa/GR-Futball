function start() {
    document.getElementById("dark").style.display = "none";
    document.getElementById("counter").style.display = "none";
}

setTimeout(() => {
    document.getElementById("counter").innerText = 3;
    setTimeout(() => {
        document.getElementById("counter").innerText = 2;
        setTimeout(() => {
            document.getElementById("counter").innerText = 1;
            setTimeout(() => {
                start();
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
