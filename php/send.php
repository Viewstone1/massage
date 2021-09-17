<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$comment = htmlspecialchars($comment);

$name = urldecode($name);
$phone = urldecode($phone);
$comment = urldecode($comment);

$name = trim($name);
$phone = trim($phone);
$comment = trim($comment);

// echo $name;
// echo "<br>";
// echo $phone;
// echo "<br>";
// echo $comment;


if (mail("ovsienko23@mail.ru", "Заявка с сайта", "Имя:".$name.". Телефон:".$phone." Комментарий:".$comment." From: ovsienko23@yandex.ru \r\n"))

{
  echo "Сообщение успешно отправлено";
} else {
  echo "При отправке сообщения возникла ошибка";
}
