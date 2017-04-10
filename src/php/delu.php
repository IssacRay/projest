<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "gjw";
	$name=$_POST['name'];

	// 创建连接
	$conn = new mysqli($servername,$username,$password,$dbname);

	$sql = "select * from users where username='".$name."'";
	$result = $conn->query('set names utf8');
	$result = $conn->query($sql);
	$row =$result->fetch_all(MYSQLI_ASSOC);


	echo json_encode($row);
	
?>