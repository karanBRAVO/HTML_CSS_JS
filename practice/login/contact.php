<?php
if(isset($_POST['name'])){
    $server = "localhost";
    $username = "root";
    $pass = "";

    $con = mysqli_connect($server, $username, $pass);

    if(!$con){
        die("connection to this database faileddue to" .mysqli_connect_error());
    }
    // echo "Successfully connected to db";

    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $sql = "INSERT INTO `login`.`information` (`name`, `email`, `date`, `password`) VALUES ( '$name', '$email', current_timestamp(), '$password');";
    // echo $sql;

    if($con->query($sql) == true){
        // echo "Succesfully inserted";
    }
    else{
        echo "ERROR: $sql <br> $con->error";
    }

    $con->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <link rel="stylesheet" href="style2.css">
</head>
<body>
    <div class="container">
            <div class="content">
                <h1>Login</h1> 
                <form action="contact.php" method="POST" class="content">
                    <input type="text" name="name" id="u_name" placeholder="Name" class="boxes" required>
                    <input type="email" name="email" id="u_email" placeholder="Email" class="boxes" required>
                    <input type="number" name="password" id="u_pass" placeholder="Password" class="boxes" required>
                    <button value="Submit" name="submit" id="submit-btn" class="submit_btn">Submit</button>
                </form>
            </div>
    </div>
</body>
</html>