$(function(){
	$('.dl').on('click',function(e){
		e.preventDefault();
		var name=$('.name')[0].value;
		var psw=$('.psw')[0].value;
		$.ajax({
			type:'post',
			url:'../php/delu.php',
			dataType:'json',
			data:{name:name},
			success:function(data){
				console.log(data);
				if(data.length>0){
					try{
						if(data[0].psw==psw){
							setCookie('name',name,7,'../');
						}else{
							alert('密码错误');
						}
					}catch(err){
						alert('请输入密码');
					}
				}else{
					alert('你用户未被注册');
				}
				console.log(getCookie('name'));
		
				if(getCookie('name')){
					$('#id').html(getCookie('name'));
					$('.tuichu').html('退出');
					$('.tuichu').on('click',function(){
						setCookie('name','',-1);
						$('.tuichu').html('');
					})
				}
			}
		})

	})
	if(getCookie('name')){
		$('#id').html(getCookie('name'));
		$('.tuichu').html('退出');
		$('.tuichu').on('click',function(){
			setCookie('name','',-1);
			$('.tuichu').html('');
		})
	}
})