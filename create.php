<?php

include('./load.php');

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "INSERT INTO leaderboard (nickname, score) VALUES ('$_SESSION[nickname]','$_POST[score]')";
$conn->query($sql);
