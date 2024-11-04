<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = htmlspecialchars($_POST['fullname']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "senaictti@fiemg.com.br"; 
    $subjectEmail = "Nova mensagem de contato: $subject";
    $body = "Nome: $fullname\n";
    $body .= "Email: $email\n";
    $body .= "Telefone: $phone\n";
    $body .= "Área de interesse: $subject\n";
    $body .= "Mensagem: $message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subjectEmail, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem.";
    }
}
?>
