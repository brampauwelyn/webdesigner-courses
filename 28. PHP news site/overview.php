<?php
include("includes/Db.php");
include("includes/config.php");
include("includes/connect.php");

$sql = "SELECT * FROM news_articles";
$articles = Db::getResult($sql);

?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Nieuws Overview</title>
  </head>
  <body>

    <h1>Nieuws Overview</h1>

    <table border>
      <thead>
        <td>ID</td>
        <td>Title</td>
        <td>Author</td>
        <td>Date</td>
        <td>Actions</td>
      </thead>
      <tbody>
        <?php foreach($articles as $article){
        ?>
        <tr>
          <td><?php echo $article["ID"] ?></td>
          <td><?php echo $article["title"] ?></td>
          <td><?php echo $article["author"] ?></td>
          <td><?php echo $article["datum"] ?></td>
          <td>
            <a href="delete.php?id=<?php echo $article["ID"]; ?>">Delete</a>
            <a href="edit.php?id=<?php echo $article["ID"] ?>">Edit</a>
          </td>
        </tr>
        <?php
        }
        ?>

      </tbody>
    </table>


  </body>
</html>
