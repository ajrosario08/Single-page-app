<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$header = "From:" . $email . "\r\n";
$header .= "X-Mailer: PHP /" . phpversion() . "\r\n";
$header .= "Mime Verion: 1.0 \r\n";
$header .= "Content Type: text/plain";

$comment = "This message has been sent by " . $name . "\r\n";
$comment .= "E-mail it's: ". $email. "\r\n";
$comment .= "He's message is: " . $message . "\r\n";

$for "ajrosario@gmail.com";
$Subject = "Contact from website"

mail($subjet, utf8_decode($comment), $header);

echo json_encode(arary(
    'Messge' => sprintf("your message has been sent %s", $name);
));

 ?>
