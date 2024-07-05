<?php
register_shutdown_function(function (){var_dump(error_get_last());die;});
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php'; // Путь к файлам PHPMailer, если вы используете Composer

$mail = new PHPMailer(true);

try {
  // Настройки SMTP
  $mail->isSMTP();
  $mail->Host       = 'smtp.mail.ru';          // SMTP сервер
  $mail->SMTPAuth   = true;                    // Включить аутентификацию SMTP
  $mail->Username   = 'gleb.romanov2002@mail.ru'; // Ваш email
  $mail->Password   = 'your_password';          // Ваш пароль
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Включить шифрование TLS или SSL
  $mail->Port       = 465;                     // TCP порт для подключения

  // От кого письмо
  $mail->setFrom('gleb.romanov2002@mail.ru', 'Gleb Romanov');
  // Кому отправить
  $mail->addAddress('recipient@example.com', 'Recipient Name');

  // Контент письма
  $mail->isHTML(true);
  $mail->Subject = 'Заголовок письма';
  $mail->Body    = 'Тело письма в формате HTML';
  $mail->AltBody = 'Тело письма в формате plain text';

  $mail->send();
  echo 'Письмо успешно отправлено';
} catch (Exception $e) {
  echo "Ошибка при отправке письма: {$mail->ErrorInfo}";
}
?>
