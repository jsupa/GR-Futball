<?php

session_start();

$redirect = 'http://' . $_SERVER['HTTP_HOST'];

function RandomString($length = 20)
{
    $keys = array_merge(range(0, 9), range('a', 'z'));
    $key = "";
    for ($i = 0; $i < $length; $i++) {
        $key .= $keys[mt_rand(0, count($keys) - 1)];
    }
    return $key;
}
