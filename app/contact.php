<?php

  if( isset( $_POST['name'], $_POST['email'], $_POST['phone'], $_POST['company'], $_POST['subject'], $_POST['message'] ) ) {

    $to = 'kevin.lacroix.nz@gmail.com';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $company = $_POST['company'];
    $subject = $_POST['subject'];
    $message_txtarea = $_POST['message'];
    $title = "Contact from www.kevin-lacroix.com";

    // On filtre les serveurs qui rencontrent des bogues.
    if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $to)) {
      $passage_ligne = "\r\n";
    } else {
      $passage_ligne = "\n";
    }

    $message_body = "NOM : " . $name . $passage_ligne;
    $message_body .= "EMAIL : " . $email . $passage_ligne;
    $message_body .= "PHONE : " . $phone . $passage_ligne;
    $message_body .= "COMPANY : " . $company . $passage_ligne;
    $message_body .= "SUJET : " . $subject . $passage_ligne;
    $message_body .= "MESSAGE : " . $message_txtarea;

    //=====Déclaration des messages au format texte et au format HTML.
    $message_txt = $message_body;
    $message_html = "<html><head></head><body>" . $message_body . "</body></html>";
    //==========

    //=====Création de la boundary
    $boundary = "-----=" . md5(rand());
    //==========

    //=====Création du header de l'e-mail.
    $header = "From: \"" . $name . "\"<" . $email . ">" . $passage_ligne;
    $header.= "Reply-to: \"" . $name . "\" <" . $email . ">" . $passage_ligne;
    $header.= "X-Mailer: PHP/" . phpversion();
    $header.= "MIME-Version: 1.0" . $passage_ligne;
    $header.= "Content-Type: multipart/alternative;" . $passage_ligne . " boundary=\"$boundary\"" . $passage_ligne;
    //==========

    //=====Création du message.
    $message = $passage_ligne . "--" . $boundary . $passage_ligne;
    //=====Ajout du message au format texte.
    $message.= "Content-Type: text/plain; charset=\"ISO-8859-1\"" . $passage_ligne;
    $message.= "Content-Transfer-Encoding: 8bit" . $passage_ligne;
    $message.= $passage_ligne . $message_txt . $passage_ligne;
    //==========
    $message.= $passage_ligne . "--" . $boundary . $passage_ligne;
    //=====Ajout du message au format HTML
    $message.= "Content-Type: text/html; charset=\"ISO-8859-1\"" . $passage_ligne;
    $message.= "Content-Transfer-Encoding: 8bit" . $passage_ligne;
    $message.= $passage_ligne . $message_html . $passage_ligne;
    //==========
    $message.= $passage_ligne . "--" . $boundary . "--" . $passage_ligne;
    $message.= $passage_ligne . "--" . $boundary . "--" . $passage_ligne;
    //==========

    //=====Envoi de l'e-mail.
    mail($to, $title, $message, $header);
    //==========
    echo "Your message was sent successfully " . $name . ". Thanks!";

  }

?>
