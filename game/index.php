<?php
include('./../load.php');

if (empty($_SESSION['nickname'])) {
    $_SESSION['nickname'] = 'anonymous';
}

?>

<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="../style/style.css?v=<? echo RandomString(); ?>" />
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="expires" content="Tue, 01 Jan 1990 12:00:00 GMT" />
    <title>.GoodBall</title>
</head>

<body>
    <div id="main">
        <div id="rotate">
            <h1>.GoodBall</h1>
            <img src="../images/rotate_image.png">
            <h4>prosím otoč<br>svoje zariadenie</h4>
            <h3>alebo</h3>
            <button>zbraziť tabuľku</button>
        </div>
        <div id="hra">
            <img src="../images/stadion.png" alt="" class="stadion">
            <img src="../images/siet.png" alt="" class="siet">
            <img src="../images/strelec.png" alt="" class="strelec">
            <img src="../images/lopta.png" alt="" class="lopta lopta_default">
            <img src="../images/ruky.png" alt="" class="ruky">
            <div id="dark"> </div>
            <h1 id="goolText">GOOOOL</h1>
            <button id="goolButton" onclick="start()">POKRAČUJ</button>
            <div id="nice">+1</div>
            <div id="counter">4</div>
            <div id="score">SCORE: 0</div>
            <div id="hearts">❤️❤️❤️❤️❤️</div>
        </div>
    </div>
    <script src="../js/app.js"></script>
</body>

</html>