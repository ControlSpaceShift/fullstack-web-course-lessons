<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Request Updated</title>
</head>
<body style="background-color: <?php echo $_POST["color"]; ?>;">
    <?php
        // var_dump($_POST)
    ?>
    Welcome <?php echo $_POST["name"]; ?><br>
    Your email address is: <?php echo $_POST["email"]; ?>
    <br>
    Your password is: 
    <?php
        $hashPassword = $_POST["password"];
        echo(password_hash($hashPassword, PASSWORD_DEFAULT));
    ?>
    <br>
    Your color is: <?php echo $_POST["color"]; ?>
</body>
</html>