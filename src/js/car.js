$(function(){
	console.log(getCookie('goods'));
	var arr=getCookie('goods');
	arr=JSON.parse(arr);
	for(var i=0;i<arr.length;i++){
		console.log(arr[i].guid);
		var guid=arr[i].guid;
		var num=arr[i].num;
		var res=0;
		$.ajax({
			type:'get',
			url:'../php/goods.php',
			dataType:'json',
			data:{guid:guid},
			success:function(data){
				console.log(data);
				for(var i=0; i<data.length;i++){
					var $li =$('<li/>');
					$('<img/>').appendTo($li).attr({'src':data[i].img});
					$li.appendTo('.carlist');
					$('<span/>').addClass('gn').html(data[i].firstname).appendTo($li);
					$('<span/>').addClass('pic').html(data[i].price).appendTo($li);
					$('<span/>').addClass('yh').html('-').appendTo($li);
					$('<span/>').addClass('yh').html(num).appendTo($li);
					$('<span/>').addClass('xj').html(num*data[i].price).appendTo($li);
					res+=num*data[i].price;
					console.log(res);
					$('.total b').html(res);
				}
			}
		})
	}
	$('.qingkong').on('click',function(){
		setCookie('goods','',-1);
	})
})