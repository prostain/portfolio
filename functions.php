<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
echo 'coucou';

$to      = '';
$subject = 'le sujet';
$message = 'Bonjour !';
$headers = array(
    'From' => 'webmaster@peterson-rostain.fr',
    'X-Mailer' => 'PHP/' . phpversion()
);

mail($to, $subject, $message, $headers);
