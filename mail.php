<?php

$recepient = "aboriginnn@yandex.ru";
$sitename = "Сайт Web Development";

$name = trim($_POST["user_name"]);
$way = trim($_POST["user_way"]);
$link = trim($_POST["user_link"]);
$message = "Имя: $name \nСпособ связи: $way \nТелефон или ссылка: $link";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>