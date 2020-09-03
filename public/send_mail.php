<?php
$subject = $_REQUEST['subject'];
$to = 'info@dgdesignstudio.in';
$fromemail='support@rayaztech.com';
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= "From: " . $fromemail . "\r\n"; // Sender's E-mail
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$message .= 'Hi Admin,'.",<br>";
$message .= 'New Contact Form Received ! <br><br>Name: ' . $_REQUEST['name'] . "<br>";
$message .= 'Message : ' . $_REQUEST['message'];
mail($to, $subject, $message, $headers);


$subject1 = $_REQUEST['subject']; // Subject of your email
$to1 = $_REQUEST['email']; //Recipient's E-mail
$headers1 = 'MIME-Version: 1.0' . "\r\n";
$headers1 .= "From: " . $fromemail . "\r\n"; // Sender's E-mail
$headers1 .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$message1 .= 'Hi ' . $_REQUEST['name'] . ",<br>";
$message1 .= 'Thank You for conatcting us . We will revert you soon.';
mail($to1, $subject1, $message1, $headers1);
?>
<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert-dev.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css">