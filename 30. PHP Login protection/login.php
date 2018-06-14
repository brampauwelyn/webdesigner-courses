<?php
session_start();
if($_SESSION["loggedin"] == true){
  header("Location: secret.php");
  exit();
}

include("includes/Db.php");
include("includes/config.php");
include("includes/connect.php");

if(isset($_POST["username"]) && isset($_POST["password"])){
  // Check if in DB
  $sql = 'SELECT ID from admin WHERE username = ? AND password = ? AND active = ?';
  $encryptedpassword = hash('sha256', $_POST["password"]);
  $values = [$_POST["username"], $encryptedpassword, 1];
  $userId = Db::getValue($sql, $values);
  if($userId != ''){
    $_SESSION["loggedin"] = true;
    $_SESSION["userid"] = $userId;
    header("Location: secret.php");
    exit();
  }else{
    echo "Niet correct";
  }
}
?>


<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Login</title>
  </head>
  <body>
    <h1>Login</h1>

    <form class="" method="post" enctype="multipart/form-data">
      <input type="text" name="username" value="" placeholder="username">
      <input type="password" name="password" value="" placeholder="password">
      <button type="submit" name="button">Login</button>
    </form>

  </body>
</html>
