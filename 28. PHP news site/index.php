<?php

include("includes/Db.php");
include("includes/config.php");
include("includes/connect.php");

$sql = "SELECT ID, title, intro FROM news_articles";
$articles = Db::getResult($sql);
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Flash: the best news in the world</title>
  </head>
  <body>

    <h1>Flash: the best news in the world</h1>

    <?php
    foreach($articles as $article){
    ?>
    <h2><?php echo $article["title"] ?></h2>
    <p><?php echo $article["intro"] ?></p>
    <a href="detail.php?id=<?php echo $article["ID"];?>">Lees Meer</a>
    <?php
    }
    ?>


  </body>
</html>
