<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "gjw";

	// 创建连接
	$conn = new mysqli($servername,$username,$password,$dbname);

	$sql = "select * from mygoods";
	$result = $conn->query('set names utf8');
	$result = $conn->query($sql);
	$row =$result->fetch_all(MYSQLI_ASSOC);


	echo json_encode($row);

?>