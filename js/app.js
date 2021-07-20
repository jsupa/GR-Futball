var score = 0;
var health = 5;
var hitBall = 0;
const ball = document.getElementsByClassName("lopta")[0];
function init() {
    document.getElementById("dark").style.display = "none";
    document.getElementById("counter").style.display = "none";
    document.getElementById("score").style.display = "block";
    document.getElementById("hearts").style.display = "block";
}
function makeNewPosition() {
    var h = $("#hra").height() - 20;
    var w = $("#hra").width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];
}
function scorePlus() {
    score++;
    document.getElementById("score").innerText = "SCORE: " + score;
    document
        .getElementsByClassName("clickable_ball")[0]
        .removeEventListener("click", scorePlus);

    document.getElementById("nice").style.top = ball.style.top;
    document.getElementById("nice").classList.add("effect");
    ball.style.display = "none";
    document.getElementById("nice").style.left = ball.style.left;
    hitBall = 1;
}
function play(score, healt) {
    if (health > 0) {
        if (score >= 0 && score <= 10) {
            ball.classList.remove("lopta_default");
            ball.classList.add("lopta_zoom_3s");
            $(".lopta").animate(
                { top: makeNewPosition()[0], left: makeNewPosition()[1] },
                1000
            );
            setTimeout(() => {
                $(".ruky").animate({ left: makeNewPosition()[1] }, 1500);
                ball.classList.add("clickable_ball");

                document
                    .getElementsByClassName("clickable_ball")[0]
                    .addEventListener("click", scorePlus);

                document.getElementsByClassName("ruky")[0].style.display =
                    "block";
                $(".lopta").fadeTo(2000, 0, function () {
                    if (hitBall != 1) {
                        document.getElementById("hearts").innerText = document
                            .getElementById("hearts")
                            .innerText.slice(0, -2);
                        health = --health;
                        if (health != 0) {
                            document.getElementById("dark").style.display =
                                "block";
                            document.getElementById("goolText").style.display =
                                "block";
                        } else if (health === 0) {
                            var xhttp = new XMLHttpRequest();
                            xhttp.open("POST", "../create.php", true);
                            xhttp.setRequestHeader(
                                "Content-type",
                                "application/x-www-form-urlencoded"
                            );
                            xhttp.send("score=" + score);
                            // ! SAVE SCORE AND NAME WITH SQL POST
                            // ! AND SHOW GAME OWER SCREEN
                            // ? RESTART & SCOREBOARD
                        }
                    }
                    ball.classList.remove("clickable_ball");
                });
                $(".lopta").animate(
                    { top: makeNewPosition()[0], left: makeNewPosition()[1] },
                    1500,
                    function () {
                        if (hitBall != 1 && health != 0) {
                            document.getElementById(
                                "goolButton"
                            ).style.display = "block";
                        }
                        document
                            .getElementsByClassName("ruky")[0]
                            .removeAttribute("style");
                        ball.classList.remove("lopta_zoom_3s");
                        document
                            .getElementById("nice")
                            .classList.remove("effect");
                        document
                            .getElementById("nice")
                            .removeAttribute("style");
                        ball.removeAttribute("style");
                        if (hitBall === 1) {
                            setTimeout(() => {
                                start();
                            }, 500);
                        }
                        hitBall = 0;
                    }
                );
            }, 500);
            $(".ruky").animate({ left: makeNewPosition()[1] }, 1000);
        } else if (score > 10 && score <= 20) {
            ball.classList.remove("lopta_default");
            ball.classList.add("lopta_zoom_3s");
            $(".lopta").animate(
                { top: makeNewPosition()[0], left: makeNewPosition()[1] },
                1000
            );
            setTimeout(() => {
                $(".ruky").animate({ left: makeNewPosition()[1] }, 1500);
                ball.classList.add("clickable_ball");

                document
                    .getElementsByClassName("clickable_ball")[0]
                    .addEventListener("click", scorePlus);

                document.getElementsByClassName("ruky")[0].style.display =
                    "block";
                $(".lopta").fadeTo(1500, 0, function () {
                    if (hitBall != 1) {
                        document.getElementById("hearts").innerText = document
                            .getElementById("hearts")
                            .innerText.slice(0, -2);
                        health = --health;
                        if (health != 0) {
                            document.getElementById("dark").style.display =
                                "block";
                            document.getElementById("goolText").style.display =
                                "block";
                        } else if (health === 0) {
                            var xhttp = new XMLHttpRequest();
                            xhttp.open("POST", "../create.php", true);
                            xhttp.setRequestHeader(
                                "Content-type",
                                "application/x-www-form-urlencoded"
                            );
                            xhttp.send("score=" + score);
                            // ! SAVE SCORE AND NAME WITH SQL POST
                            // ! AND SHOW GAME OWER SCREEN
                            // ? RESTART & SCOREBOARD
                        }
                    }
                    ball.classList.remove("clickable_ball");
                });
                $(".lopta").animate(
                    { top: makeNewPosition()[0], left: makeNewPosition()[1] },
                    1000,
                    function () {
                        if (hitBall != 1 && health != 0) {
                            document.getElementById(
                                "goolButton"
                            ).style.display = "block";
                        }
                        document
                            .getElementsByClassName("ruky")[0]
                            .removeAttribute("style");
                        ball.classList.remove("lopta_zoom_3s");
                        document
                            .getElementById("nice")
                            .classList.remove("effect");
                        document
                            .getElementById("nice")
                            .removeAttribute("style");
                        ball.removeAttribute("style");
                        if (hitBall === 1) {
                            setTimeout(() => {
                                start();
                            }, 500);
                        }
                        hitBall = 0;
                    }
                );
            }, 500);
            $(".ruky").animate({ left: makeNewPosition()[1] }, 1000);
        } else if (score > 20 && score <= 30) {
            ball.classList.remove("lopta_default");
            ball.classList.add("lopta_zoom_3s");
            $(".lopta").animate(
                { top: makeNewPosition()[0], left: makeNewPosition()[1] },
                800
            );
            setTimeout(() => {
                $(".ruky").animate({ left: makeNewPosition()[1] }, 1000);
                ball.classList.add("clickable_ball");

                document
                    .getElementsByClassName("clickable_ball")[0]
                    .addEventListener("click", scorePlus);

                document.getElementsByClassName("ruky")[0].style.display =
                    "block";
                $(".lopta").fadeTo(1200, 0, function () {
                    if (hitBall != 1) {
                        document.getElementById("hearts").innerText = document
                            .getElementById("hearts")
                            .innerText.slice(0, -2);
                        health = --health;
                        if (health != 0) {
                            document.getElementById("dark").style.display =
                                "block";
                            document.getElementById("goolText").style.display =
                                "block";
                        } else if (health === 0) {
                            var xhttp = new XMLHttpRequest();
                            xhttp.open("POST", "../create.php", true);
                            xhttp.setRequestHeader(
                                "Content-type",
                                "application/x-www-form-urlencoded"
                            );
                            xhttp.send("score=" + score);
                            // ! SAVE SCORE AND NAME WITH SQL POST
                            // ! AND SHOW GAME OWER SCREEN
                            // ? RESTART & SCOREBOARD
                        }
                    }
                    ball.classList.remove("clickable_ball");
                });
                $(".lopta").animate(
                    { top: makeNewPosition()[0], left: makeNewPosition()[1] },
                    700,
                    function () {
                        if (hitBall != 1 && health != 0) {
                            document.getElementById(
                                "goolButton"
                            ).style.display = "block";
                        }
                        document
                            .getElementsByClassName("ruky")[0]
                            .removeAttribute("style");
                        ball.classList.remove("lopta_zoom_3s");
                        document
                            .getElementById("nice")
                            .classList.remove("effect");
                        document
                            .getElementById("nice")
                            .removeAttribute("style");
                        ball.removeAttribute("style");
                        if (hitBall === 1) {
                            setTimeout(() => {
                                start();
                            }, 500);
                        }
                        hitBall = 0;
                    }
                );
            }, 300);
            $(".ruky").animate({ left: makeNewPosition()[1] }, 1000);
        } else if (score > 30 && score <= 40) {
            ball.classList.remove("lopta_default");
            ball.classList.add("lopta_zoom_3s");
            $(".lopta").animate(
                { top: makeNewPosition()[0], left: makeNewPosition()[1] },
                800
            );
            setTimeout(() => {
                $(".ruky").animate({ left: makeNewPosition()[1] }, 1000);
                ball.classList.add("clickable_ball");

                document
                    .getElementsByClassName("clickable_ball")[0]
                    .addEventListener("click", scorePlus);

                document.getElementsByClassName("ruky")[0].style.display =
                    "block";
                $(".lopta").fadeTo(1000, 0, function () {
                    if (hitBall != 1) {
                        document.getElementById("hearts").innerText = document
                            .getElementById("hearts")
                            .innerText.slice(0, -2);
                        health = --health;
                        if (health != 0) {
                            document.getElementById("dark").style.display =
                                "block";
                            document.getElementById("goolText").style.display =
                                "block";
                        } else if (health === 0) {
                            var xhttp = new XMLHttpRequest();
                            xhttp.open("POST", "../create.php", true);
                            xhttp.setRequestHeader(
                                "Content-type",
                                "application/x-www-form-urlencoded"
                            );
                            xhttp.send("score=" + score);
                            // ! SAVE SCORE AND NAME WITH SQL POST
                            // ! AND SHOW GAME OWER SCREEN
                            // ? RESTART & SCOREBOARD
                        }
                    }
                    ball.classList.remove("clickable_ball");
                });
                $(".lopta").animate(
                    { top: makeNewPosition()[0], left: makeNewPosition()[1] },
                    500,
                    function () {
                        if (hitBall != 1 && health != 0) {
                            document.getElementById(
                                "goolButton"
                            ).style.display = "block";
                        }
                        document
                            .getElementsByClassName("ruky")[0]
                            .removeAttribute("style");
                        ball.classList.remove("lopta_zoom_3s");
                        document
                            .getElementById("nice")
                            .classList.remove("effect");
                        document
                            .getElementById("nice")
                            .removeAttribute("style");
                        ball.removeAttribute("style");
                        if (hitBall === 1) {
                            setTimeout(() => {
                                start();
                            }, 500);
                        }
                        hitBall = 0;
                    }
                );
            }, 300);
            $(".ruky").animate({ left: makeNewPosition()[1] }, 1000);
        } else if (score > 40 && score <= 100) {
            ball.classList.remove("lopta_default");
            ball.classList.add("lopta_zoom_3s");
            $(".lopta").animate(
                { top: makeNewPosition()[0], left: makeNewPosition()[1] },
                500
            );
            setTimeout(() => {
                $(".ruky").animate({ left: makeNewPosition()[1] }, 1000);
                ball.classList.add("clickable_ball");

                document
                    .getElementsByClassName("clickable_ball")[0]
                    .addEventListener("click", scorePlus);

                document.getElementsByClassName("ruky")[0].style.display =
                    "block";
                $(".lopta").fadeTo(1000, 0, function () {
                    if (hitBall != 1) {
                        document.getElementById("hearts").innerText = document
                            .getElementById("hearts")
                            .innerText.slice(0, -2);
                        health = --health;
                        if (health != 0) {
                            document.getElementById("dark").style.display =
                                "block";
                            document.getElementById("goolText").style.display =
                                "block";
                        } else if (health === 0) {
                            var xhttp = new XMLHttpRequest();
                            xhttp.open("POST", "../create.php", true);
                            xhttp.setRequestHeader(
                                "Content-type",
                                "application/x-www-form-urlencoded"
                            );
                            xhttp.send("score=" + score);
                            // ! SAVE SCORE AND NAME WITH SQL POST
                            // ! AND SHOW GAME OWER SCREEN
                            // ? RESTART & SCOREBOARD
                        }
                    }
                    ball.classList.remove("clickable_ball");
                });
                $(".lopta").animate(
                    { top: makeNewPosition()[0], left: makeNewPosition()[1] },
                    500,
                    function () {
                        if (hitBall != 1 && health != 0) {
                            document.getElementById(
                                "goolButton"
                            ).style.display = "block";
                        }
                        document
                            .getElementsByClassName("ruky")[0]
                            .removeAttribute("style");
                        ball.classList.remove("lopta_zoom_3s");
                        document
                            .getElementById("nice")
                            .classList.remove("effect");
                        document
                            .getElementById("nice")
                            .removeAttribute("style");
                        ball.removeAttribute("style");
                        if (hitBall === 1) {
                            setTimeout(() => {
                                start();
                            }, 500);
                        }
                        hitBall = 0;
                    }
                );
            }, 100);
            $(".ruky").animate({ left: makeNewPosition()[1] }, 1000);
        } else if (score > 100) {
            ball.classList.remove("lopta_default");
            ball.classList.add("lopta_zoom_3s");
            $(".lopta").animate(
                { top: makeNewPosition()[0], left: makeNewPosition()[1] },
                200
            );
            setTimeout(() => {
                $(".ruky").animate({ left: makeNewPosition()[1] }, 500);
                ball.classList.add("clickable_ball");

                document
                    .getElementsByClassName("clickable_ball")[0]
                    .addEventListener("click", scorePlus);

                document.getElementsByClassName("ruky")[0].style.display =
                    "block";
                $(".lopta").fadeTo(500, 0, function () {
                    if (hitBall != 1) {
                        document.getElementById("hearts").innerText = document
                            .getElementById("hearts")
                            .innerText.slice(0, -2);
                        health = --health;
                        if (health != 0) {
                            document.getElementById("dark").style.display =
                                "block";
                            document.getElementById("goolText").style.display =
                                "block";
                        } else if (health === 0) {
                            var xhttp = new XMLHttpRequest();
                            xhttp.open("POST", "../create.php", true);
                            xhttp.setRequestHeader(
                                "Content-type",
                                "application/x-www-form-urlencoded"
                            );
                            xhttp.send("score=" + score);
                            // ! SAVE SCORE AND NAME WITH SQL POST
                            // ! AND SHOW GAME OWER SCREEN
                            // ? RESTART & SCOREBOARD
                        }
                    }
                    ball.classList.remove("clickable_ball");
                });
                $(".lopta").animate(
                    { top: makeNewPosition()[0], left: makeNewPosition()[1] },
                    300,
                    function () {
                        if (hitBall != 1 && health != 0) {
                            document.getElementById(
                                "goolButton"
                            ).style.display = "block";
                        }
                        document
                            .getElementsByClassName("ruky")[0]
                            .removeAttribute("style");
                        ball.classList.remove("lopta_zoom_3s");
                        document
                            .getElementById("nice")
                            .classList.remove("effect");
                        document
                            .getElementById("nice")
                            .removeAttribute("style");
                        ball.removeAttribute("style");
                        if (hitBall === 1) {
                            setTimeout(() => {
                                start();
                            }, 500);
                        }
                        hitBall = 0;
                    }
                );
            }, 200);
            $(".ruky").animate({ left: makeNewPosition()[1] }, 500);
        }
    } else {
        // GAME OVER
    }
}
function start() {
    document.getElementById("dark").style.display = "none";
    document.getElementById("goolText").style.display = "none";
    document.getElementById("goolButton").style.display = "none";
    play(score, health);
}

setTimeout(() => {
    document.getElementById("counter").innerText = 3;
    setTimeout(() => {
        document.getElementById("counter").innerText = 2;
        setTimeout(() => {
            document.getElementById("counter").innerText = 1;
            setTimeout(() => {
                init();
                start();
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
