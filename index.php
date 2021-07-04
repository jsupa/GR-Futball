<?php

function RandomString($length = 20)
{
    $keys = array_merge(range(0, 9), range('a', 'z'));
    $key = "";
    for ($i = 0; $i < $length; $i++) {
        $key .= $keys[mt_rand(0, count($keys) - 1)];
    }
    return $key;
}

?>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400" />
    <link rel="stylesheet" href="./style/style.css?v=<? echo RandomString(); ?>" />
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
            <img src="images/rotate_image.png">
            <h4>prosím otoč<br>svoje zariadenie</h4>
            <h3>alebo</h3>
            <button>zbraziť tabuľku</button>
        </div>
        <div id="unsupport">
            <h1>.GoodBall</h1>
            <h2>Nepodporované rozlíšenie</h2>
        </div>
        <div id="info">
            <h1>.GoodBall</h1>
            <h4>
                Klikacia hra na reflexy a rýchlosť hráča. Hráš za brankára a máš 4 životy.
                <br>
                Loptu možeš chytiť až keď si budeš vidieť ruky.
                <br><br>
                <i>tam ti niekto hodí jägera z publika a za to dostanš život navyše.</i>
            </h4>
            <form method="POST">
                <input type="text" name="nickname" placeholder="zadaj meno" maxlength="20">
                <br>
                <button type="submit" name="start_game">štart</button>
            </form>
        </div>
    </div>
</body>

</html>