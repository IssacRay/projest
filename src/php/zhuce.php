<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "gjw";
	

	// 创建连接
	$conn = new mysqli($servername,$username,$password,$dbname);


	$username=$_POST['username'];
	$password=$_POST['psw'];
	$tell=$_POST['tellphone'];
	$email=$_POST['email'];



	$sql = "insert into users(username,psw,tellphone,email) values('".$username."','".$password."','".$tell."','".$email."');";
	$result = $conn->query('set names utf8');
	$result = $conn->query($sql);

	echo "注册成功";

?>
