<?php

echo "<h1>Connected!</h1>";

$pdo = new PDO('mysql:host=mysql:3306','admin','admin');

if ($pdo) {
    echo "<h3>MySQL connected!</h3>";
}

