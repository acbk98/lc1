<!--   
    Al Curry
    March 28, 2017

    send_email.php for the lactationCalculator
    calling program, which does a post, is lcInput.html
-->
<html>
<body>
<?php
$bname = $_POST['bname']; // required
$totalozh = $_POST["totalozh"]; 
$totalmlh = $_POST["totalmlh"]; 
$eAddr = $_POST["eAddr"]; 
$month = $_POST["month"];
$day = $_POST["day"];
$year = $_POST["year"];
$ageh = $_POST["ageh"];
$pounds0 = $_POST["pounds0"];
$ounces0 = $_POST["ounces0"];
$grams0 = $_POST["grams0"];
$pounds1 = $_POST["pounds1"];
$ounces1 = $_POST["ounces1"];
$grams1 = $_POST["grams1"];
$weightmsgh = $_POST["weightmsgh"];
$pounds2 = $_POST["pounds2"];
$ounces2 = $_POST["ounces2"];
$grams2 = $_POST["grams2"];
$pounds3 = $_POST["pounds3"];
$ounces3 = $_POST["ounces3"];
$grams3 = $_POST["grams3"];
$pounds4 = $_POST["pounds4"];
$ounces4 = $_POST["ounces4"];
$grams4 = $_POST["grams4"];
$pounds5 = $_POST["pounds5"];
$ounces5 = $_POST["ounces5"];
$grams5 = $_POST["grams5"];
$pounds6 = $_POST["pounds6"];
$ounces6 = $_POST["ounces6"];
$grams6 = $_POST["grams6"];
$ozt1 = $_POST["ozt1"];
$mlt1 = $_POST["mlt1"];
$ozt2 = $_POST["ozt2"];
$mlt2 = $_POST["mlt2"];
$ozt3 = $_POST["ozt3"];
$mlt3 = $_POST["mlt3"];
$ozt4 = $_POST["ozt4"];
$mlt4 = $_POST["mlt4"];
?>

Baby name is : <?php echo $bname; ?>  <br>
Your email address is: <?php echo $eAddr ?> </br>
Your ageh is: <?php echo $ageh ?> </br>
ozt4 value is : <?php echo $_POST["ozt4"]; ?>  </br>
totaloz value is : <?php echo $_POST["totaloz"]; ?>  <br>
totalozh value is : <?php echo $totalozh; ?>  <br>
totalozh value is : <?php echo $totalmlh; ?>  <br>

<?
     
     $email_message =  "LC values -- \n\n";
     $email_message .=  "Baby name: ".$bname."\n";
     $email_message .=  "Birth date: ".$month."/".$day."/".$year."\n";
     $email_message .=  "Age: ".$ageh." days\n";
     $email_message .=  "Birth weight: ".$pounds0." lbs and ".$ounces0." oz   (or ".$grams0." g)\n\n";
     $email_message .=  "Today's naked weight: ".$pounds1." lbs and ".$ounces1." oz   (or ".$grams1." g) \n";
     $email_message .=  "Weight status: ".$weightmsgh." \n\n";
     $email_message .=  "Test weight: ".$pounds2." lbs and ".$ounces2." oz   (or ".$grams2." g) \n\n";
     $email_message .=  "Weight after 1st side: ".$pounds3." lbs and ".$ounces3." oz   (or ".$grams3." g) \n";
     $email_message .=  "   Amount transferred: ".$ozt1." oz   or ".$mlt1." ml \n\n";
     $email_message .=  "Weight after 2nd side: ".$pounds4." lbs and ".$ounces4." oz   (or ".$grams4." g) \n";
     $email_message .=  "   Amount transferred: ".$ozt2." oz   or ".$mlt2." ml \n\n";
     $email_message .=  "Weight after 3rd side: ".$pounds5." lbs and ".$ounces5." oz   (or ".$grams5." g) \n";
     $email_message .=  "   Amount transferred: ".$ozt3." oz   or ".$mlt3." ml \n\n";
     $email_message .=  "Weight after 4th side: ".$pounds6." lbs and ".$ounces6." oz   (or ".$grams6." g)\n";
     $email_message .=  "   Amount transferred: ".$ozt4." oz   or ".$mlt4." ml \n\n";
     $email_message .=  "TOTAL TRANSFERRED: ".$totalozh." OZ   or ".$totalmlh." ML\n\n";

     $email_message .=  "Email address: ".$eAddr."\n\n";

     $email_subject = "Lactation Calclulations ";
     $email_subject .= "- ".$bname."\n";
     echo "made it here\n";

//'Reply-To: '.$email_from."\r\n" .
// create email headers 
//$headers = 'From: '.$email_from."\r\n".
//'X-Mailer: PHP/' . phpversion();

     $headers = "From: noreply@LC.com";

//@mail($email_to, $email_subject, $email_message, $headers); 

$rc = mail($eAddr,$email_subject,$email_message,$headers);

echo "\nEmail summary sent to $eAddr\n";
//if ($rc) {
 //   echo "<script type='text/javascript'>alert('Email summary sent successfully')</script>";
header('Location: ' . $_SERVER['HTTP_REFERER']);
exit;
?>

</body>
</html>