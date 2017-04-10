$(function(){
	$('.at2').click('.at2',function(event) {
		event.preventDefault();
		$(this).find('div').removeClass('noth');
		$('.at1').find('div').addClass('noth');
		$('.container').animate({'left':-600});
	});
	$('.at1').click('.at1',function(event) {
		event.preventDefault();
		$(this).find('div').removeClass('noth');
		$('.at2').find('div').addClass('noth');
		$('.container').animate({'left':0});
	});
	$('.text_box').focusin('.text_box',function(event) {
		$(this).addClass('text_box_focus');
	}).focusout('.text_box',function(event){
		$(this).removeClass('text_box_focus');
	});
	var in1=false;
	var in2=false;
	var in3=false;
	var in4=false;
	var in5=false;
	var in6=false;
	var in7=false;
	$('#email').focusout('#email',function(){
		console.log($('#email')[0].value);
		var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
		if($('#email')[0].value.search(reg)==-1){
			$(this).parent('.text_box').addClass('text_box_error')

		}else{
			$(this).parent('.text_box').removeClass('text_box_error')
			in1=true;
		}
		
	});
	$('#psw').focusout('#psw',function(){
		var reg=/^\S{6,20}$/;
		if($('#psw')[0].value.search(reg)==-1){
			$(this).parent('.text_box').addClass('text_box_error')
		}else{
			$(this).parent('.text_box').removeClass('text_box_error')
			in2=true;
		}
	});
	$('#repsw').focusout('#psw',function(){
		console.log()
		if($('#repsw')[0].value==$('#psw')[0].value){
			$(this).parent('.text_box').removeClass('text_box_error')
			in3=true;
		}else{
			$(this).parent('.text_box').addClass('text_box_error')
			
		}
	});
	$('#tell').focusout('#tell',function(){
		var reg = /^1[34578]\d{9}$/;
		if($('#tell')[0].value.search(reg)==-1){
			$(this).parent('.text_box').addClass('text_box_error')
		}else{
			$(this).parent('.text_box').removeClass('text_box_error')
			in4=true;
		}
	})
	$('button.tj').on('click',function(e){
		e.preventDefault();
		console.log('lala');
		if(in4&&in1&&in3&&in2){
			var $email=$('#email')[0].value;
			var $psw=$('#psw')[0].value;
			var $tell=$('#tell')[0].value;
			console.log('yyy');
			
			$.ajax({
				type:'post',
				url:'../php/zhuce.php',
				// dataType:'json',
				data:{username:$email,psw:$psw,tellphone:$tell,email:$email},
				success:function(data){
					console.log(data);
					alert(data);
				}
			})
		}else{
			alert('信息有误')
			return false;
		}
	})


	$('#psw1').focusout('#psw1',function(){
		var reg=/^\S{6,20}$/;
		if($('#psw1')[0].value.search(reg)==-1){
			$(this).parent('.text_box').addClass('text_box_error')
		}else{
			$(this).parent('.text_box').removeClass('text_box_error')
			in5=true;
		}
	});
	$('#repsw1').focusout('#psw1',function(){
		console.log()
		if($('#repsw1')[0].value==$('#psw1')[0].value){
			$(this).parent('.text_box').removeClass('text_box_error')
			in6=true;
		}else{
			$(this).parent('.text_box').addClass('text_box_error')
			
		}
	});
	$('#tell1').focusout('#tell1',function(){
		var reg = /^1[34578]\d{9}$/;
		if($('#tell1')[0].value.search(reg)==-1){
			$(this).parent('.text_box').addClass('text_box_error')
		}else{
			$(this).parent('.text_box').removeClass('text_box_error')
			in7=true;
		}
	})
		$('button.tj1').on('click',function(e){
		e.preventDefault();
		console.log('lala');
		if(in7&&in6&&in5){
			// var $email=$('#email')[0].value;
			var $psw=$('#psw1')[0].value;
			var $tell=$('#tell1')[0].value;
			console.log('yyy');
			
			$.ajax({
				type:'post',
				url:'../php/zhuce.php',
				// dataType:'json',
				data:{username:$tell,psw:$psw,tellphone:$tell},
				success:function(data){
					console.log(data);
					alert(data);
				}
			})
		}else{
			alert('信息有误')
			return false;
		}
	})
})