<?php

$method = $_SERVER['REQUEST_METHOD'];

$_POST = json_decode(file_get_contents('php://input'), true);

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$project_name = trim($_POST["projectName"]);
	$admin_email  = trim("cas.kvp@gmail.com");
	$sender_email = trim("noreply@1.up58.ru");
	$form_subject = trim($_POST["formSubject"]);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "projectName" && $key != "admin_email" && $key != "formSubject" ) {
			switch ($key) {
			    case 'name':
			        $newKey = 'Имя';
			        break;
			    case 'phone':
			        $newKey = 'Телефон';
			        break;
			    case 'email':
			        $newKey = 'Почта';
			        break;			   
			    case 'resultMaxPower':
			        $newKey = 'Итого по ставке за максимальную мощность (руб./кВт)';
			        break;			    
			   case 'resultStandard':
			        $newKey = 'Итого по стандартизированной ставке (руб.)';
			        break;
			    default:
			    		$newKey = $key;
			}
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$newKey</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
		}
	}
} 

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$sender_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );