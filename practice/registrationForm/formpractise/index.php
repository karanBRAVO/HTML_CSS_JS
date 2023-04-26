<?php
if(isset($_POST['name'])){
    $server = "localhost";
    $username = "root";
    $pass = "";

    $conn = mysqli_connect($server, $username, $pass);

    if(!$conn){
        die("Connection Failed due to: " .mysqli_connect_error);
    }else{
        // echo "connection established successfuly.";
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];
    $phone = $_POST['phone'];
    $profession = $_POST['profession'];
    $age = $_POST['age'];
    $country = $_POST['country'];
    $msg = $_POST['msg'];
    
    $sql = "INSERT INTO `form`.`info` (`name`, `email`, `phone no.`, `gender`, `profession`, `age`, `country`, `date`, `msg`) VALUES ('$name', '$email', '$phone', '$gender', '$profession', '$age', '$country', current_timestamp(), '$msg');";
    // echo $sql;

    if($conn->query($sql) == true){
        // echo "data is now stored in database";
    }
    else{
        echo "Please fill again";
    }

    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment</title>
    <link rel="stylesheet" href=" style2.css">
    <script src="index.js"></script>
</head>
<body>
    <!-- <img src="img/background.jpg" alt="" class="bg_img"> -->
    <header>
        <img src="img/icon.png" alt="" class="img_icon">
        <h1>
            Make the Payment
        </h1>   
        <p>
            choose any one method of payment
        </p>
        
    </header>
    <!-- <hr> -->
    <main>
        <div class="main">
            <form action="payment.php" method = "POST" class="form_group">
                <input type="radio" value="first-method" name="methodofpay" id="method1" class="method" onclick="click1()">first method
                <div class="imgages">
                    <img src="img/visa.png" alt="" class="visa">   
                    <img src="img/american.png" alt="" class="american">   
                    <img src="img/mastercard.png" alt="" class="mastercard">   
                    <img src="img/paypal.png" alt="" class="paypal">
                </div>   
                <br>
                <input type="radio" value="second-method" name="methodofpay" id="method2" class="method" onclick="click2()">second method
                <div class="imgages">
                    <img src="img/paytm.png" alt="" class="paytm">
                    <img src="img/gpay.png" alt="" class="gpay">
                    <img src="img/rupay.jpg" alt="" class="rupay">
                    <img src="img/upi.png" alt="" class="upi">
                </div>
                <div class="btn">
                    <button name="con-btn" id="con-btn" class="continue_btn" onclick="cont_clicked()">Continue &rArr;</button>
                </div>
            </form>
        </div>
    </main>
    <div class="alert_msg">
        <h3>
            you are requested make the Payment carefully we are not responsible for any issue.
            <br>
            <a href ="https://www.hdfcbank.com/personal/resources/learning-centre/pay/how-to-use-debit-cards" class="message" target="_blank">How to do online Payment???</a>
        </h3>
    </div>
    <!-- <hr> -->
    <!-- <div class="video">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/GTCGsIxafso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="margin: 30px;">
    </iframe>
    </div> -->
    <hr>
    <footer>
        <div class="foot">
          © 2021-2022 All Rights Preserved.
          <br>
          website source youtube a great thanks to it.
          <br>
          contact:1001001001
          <br>
         <a href="https://github.com/karanBRAVO?tab=repositories" target="_blank"><img src="img/git.png" class="git_img"></a>
        </div>
    </footer>      
</body>
</html>