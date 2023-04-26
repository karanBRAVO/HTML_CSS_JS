<?php
    $server = "localhost";
    $username = "root";
    $pass = "";

    $conn = mysqli_connect($server, $username, $pass);
    if(!$conn){
        die("Connection ERROR due to: " .mysqli_connect_error);
    }else{
        // echo "Connected to the database";
    }

    $method = $_POST['methodofpay'];
    $sql = "INSERT INTO `form`.`payment` (`method`) VALUES ('$method');";
    // echo $sql;

    if($conn->query($sql) == true){
        // echo "Data is sent to db";
    }
    else{
        echo "Please fill it again";
    }
    $conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>first method</title>
</head>
<body>
    <header>
        <h1>Taking step ahead to Payment</h1>
        <h2>Amount to be paid $1000</h2>
        this is head
    </header>
    <hr>
    <main>
        this is main body
    </main>
    <hr>
    <footer>
        this is footer
    </footer>
</body>
</html>
