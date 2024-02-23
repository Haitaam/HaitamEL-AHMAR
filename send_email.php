<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $email = $_POST['email'];
    $message = $_POST['textarea'];

    // Adresse e-mail de destination
    $to_email = 'haitamelahmar1@gmail.com';

    // Sujet de l'e-mail
    $subject = 'Nouveau message de votre site Web';

    // Contenu de l'e-mail
    $email_body = "Email: $email\n\nMessage:\n$message";

    // En-têtes de l'e-mail
    $headers = "From: $email";

    // Envoyer l'e-mail
    if (mail($to_email, $subject, $email_body, $headers)) {
        // Rediriger après l'envoi de l'e-mail
        header("Location: /index.html"); // Remplacez thank_you.html par le chemin de votre page de remerciement
        exit;
    } else {
        echo 'Une erreur est survenue lors de l\'envoi de l\'e-mail.';
    }
}
?>