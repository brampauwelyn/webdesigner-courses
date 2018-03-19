<?php
include("includes/Db.php");
include("includes/config.php");
include("includes/connect.php");
// DELETE FROM `news_articles` WHERE `news_articles`.`ID` = 3"?
$sql = "DELETE FROM news_articles WHERE ID = ?";
$value = $_GET["id"];
Db::execute($sql, $value);
header("location: overview.php");
exit;
?>
