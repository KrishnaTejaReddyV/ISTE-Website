<?php
  include_once('data_connect.php');
if(isset($_POST['n'])&&isset($_POST['reg'])&&isset($_POST['mob'])&&isset($_POST['mail'])&&isset($_POST['mem'])){
$name=$_POST['n'];
$mobile=$_POST['mob'];
$regno=$_POST['reg'];
$mail=$_POST['mail'];
$member=$_POST['mem'];

if(!empty($name)&&!empty($mobile)&&!empty($regno)&&!empty($mail)&&!empty($member)){
$querycheck="select Name from register where RegistrationNumber='$regno' and MobileNumber='$mobile' and Email='$mail' and Member='$member'";
if(!mysql_num_rows(mysql_query($querycheck))){
$query="insert into register(EventName,Name,RegistrationNumber,MobileNumber,Email,Member) values('Data Structures and Algorithms','$name','$regno','$mobile','$mail','$member')";
mysql_query($query);
}
}
}
?>
