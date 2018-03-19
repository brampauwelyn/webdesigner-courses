<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include("includes/Db.php");
include("includes/config.php");
include("includes/connect.php");

$sql = "SELECT * FROM news_articles WHERE ID = ?";
$value = $_GET["id"];
$article = Db::getRow($sql, $value);

if($_POST){
  $sql = "UPDATE news_articles SET title = ?, author = ?, intro = ?, body = ? WHERE ID = ?";
  $values = [$_POST["title"], $_POST["author"], $_POST["intro"], $_POST["copy"], $_GET["id"]];
  Db::execute($sql, $values);
  header("location: overview.php");
  exit;
}

?>


<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <h1>Wijzig Artikel</h1>

    <form class="" action="edit.php?id=<?php echo $_GET["id"]; ?>" method="post">
      <fieldset>
        <input type="text" name="title" value="<?php echo $article["title"]; ?>" placeholder="Geef titel in">
      </fieldset>
      <fieldset>
        <input type="text" name="author" value="<?php echo $article["author"]; ?>" placeholder="Naam van auteur">
      </fieldset>
      <fieldset>
        <textarea name="intro" rows="8" cols="80"><?php echo $article["intro"]; ?></textarea>
      </fieldset>
      <fieldset>
        <textarea name="copy" rows="8" cols="80"><?php echo $article["body"]; ?></textarea>
      </fieldset>
      <button type="submit" name="button">Voeg Toe</button>
    </form>

  </body>
</html>
