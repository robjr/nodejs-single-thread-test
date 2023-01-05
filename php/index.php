<?php
ob_start();
$requestId = rand(1, 99999);

if (!empty($_REQUEST['sleepTime'])) {
    echo "[R$requestId] sleeping<br/>";
    ob_flush();
    sleep((int) $_REQUEST['sleepTime']);
    echo "[R$requestId] awake<br/>";
}

echo "[R$requestId] nothing to do<br/>";
ob_end_flush();
