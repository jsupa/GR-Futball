<?php
include('./../load.php');
?>

<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400" />
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
            <img src="./images/rotate_image.png">
            <h4>prosím otoč<br>svoje zariadenie</h4>
            <h3>alebo</h3>
            <button>zbraziť tabuľku</button>
        </div>
        <div id="hra">
            <img src="../images/stadion.png" alt="" class="stadion">
            <img src="../images/siet.png" alt="" class="siet">
            <img src="../images/strelec.png" alt="" class="strelec">
            <img src="../images/lopta.png" alt="" class="lopta">
            <div id="dark"> </div>
            <div id="counter">4</div>
        </div>
    </div>
    <script src="../js/app.js"></script>
</body>

</html>