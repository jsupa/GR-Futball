<?
include('./load.php');
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
    <div id="leader">
        <h1>.GoodBall</h1>

        <h4>TOP 10</h4>
        <?


        $conn = new mysqli($servername, $username, $password, $dbname);
        $sql = "SELECT nickname, score FROM leaderboard ORDER BY score DESC LIMIT 10";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
        ?>
                <div>
                    <? echo $row['nickname'] ?>
                    <p><? echo $row['score'] ?></p>
                </div>
        <?
            }
        } else {
            echo "error ball";
        }
        ?>
        <button onclick="window.location.href='/index.php'">HRA</button>
    </div>
</body>