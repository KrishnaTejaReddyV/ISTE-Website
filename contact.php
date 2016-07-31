	  <?php
  include_once('data_connect.php');
if(isset($_POST['title'])&&isset($_POST['mail'])&&isset($_POST['message'])){
$name=$_POST['title'];
$mail=$_POST['mail'];
$message=$_POST['message'];

if(!empty($name)&&!empty($mail)&&!empty($message)){
$query="insert into contact(Name,Email,Message) values('$name','$mail','$message')";
mysql_query($query);
}
}
?>