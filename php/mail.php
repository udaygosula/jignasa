<?php
	$name = $_POST['name'];
	$emailR = $_POST['mail'];
	$email = "kodurusastry.ce@gprec.ac.in";
	$email1 = "satyaudaygosula.com";
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	$headers = 'From: '.$emailR . "\r\n" .
	            'BCc: '.$email1."\r\n".
				'Reply-To: '.$emailR . "\r\n";
	if(mail($email,$subject,$message,$headers)){
        echo '<script>alert("Request sent successfully.")</script>';
		 header("Refresh: 1; url=../index.html");
	}
	else{
		echo "Refresh and try";
	}
?>