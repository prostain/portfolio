<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
echo 'coucou';

$to      = 'peterson.rostain@gmail.com';
$subject = 'le sujet';
$message = 'Bonjour !';
$headers = array(
    'From' => 'webmaster@example.com',
    'Reply-To' => 'webmaster@example.com',
    'X-Mailer' => 'PHP/' . phpversion()
);

mail($to, $subject, $message, $headers);