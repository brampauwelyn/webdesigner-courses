<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include("includes/Db.php");
include("includes/config.php");
include("includes/connect.php");

$sql = "SELECT * FROM news_articles WHERE ID = ?";
$value = $_GET["id"];
$news_article = Db::getRow($sql, $value);
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Detail Pagina</title>
  </head>
  <body>

    <h1><?php echo $news_article["title"]; ?></h1>
    <p><?php echo $news_article["datum"] ?></p>
    <p><?php echo $news_article["intro"] ?></p>
    <p><?php echo $news_article["body"] ?></p>




  </body>
</html>
