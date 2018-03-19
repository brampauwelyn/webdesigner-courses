<?php
include("includes/Db.php");
include("includes/config.php");
include("includes/connect.php");

if($_POST){
  $sql = "INSERT INTO news_articles (title, intro, body, author) VALUES (?,?,?,?)";
  $values = [$_POST["title"], $_POST["intro"], $_POST["copy"], $_POST["author"]];
  Db::execute($sql, $values);
}

?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Voeg nieuwsartikel toe</h1>

    <form class="" action="create.php" method="post">
      <fieldset>
        <input type="text" name="title" value="" placeholder="Geef titel in">
      </fieldset>
      <fieldset>
        <input type="text" name="author" value="" placeholder="Naam van auteur">
      </fieldset>
      <fieldset>
        <textarea name="intro" rows="8" cols="80">Schrijf een intro</textarea>
      </fieldset>
      <fieldset>
        <textarea name="copy" rows="8" cols="80">Schrijf copy</textarea>
      </fieldset>
      <button type="submit" name="button">Voeg Toe</button>
    </form>

  </body>
</html>
