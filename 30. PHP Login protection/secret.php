<?php
session_start();
if($_SESSION["loggedin"] != true){
  header("Location: login.php");
  exit();
}
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Secret</title>
  </head>
  <body>
    <h1>Secret</h1>
  </body>
</html>
