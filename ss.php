<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer le contenu du message
    $message = $_POST['textarea'];

    // Écrire le contenu dans un fichier
    $file = fopen("DD.txt", "w") or die("Impossible d'ouvrir le fichier !");
    fwrite($file, $message);
    fclose($file);

    echo 'Message enregistré avec succès dans le fichier DD.txt';
}
?>