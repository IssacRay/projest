$(function(){
	var guid=location.search.split('=')[1];
	console.log(guid);
	// var arr=[];
	var goods={};
	$.ajax({
		type:'get',
		url:'../php/goods.php',
		dataType:'json',
		data:{guid:guid},
		success:function(data){
			console.log(data);
			for(var i=0; i<data.length;i++){
				var yhj=data[i].old_price-data[i].price;
				$('span.oldprice').html(`￥${data[i].old_price}`);
				$('span.newprice').html(`￥${data[i].price}`);
				$('.msg_box h3.title').html(`${data[i].firstname}`);
				$('.msg_box .org').html(`${data[i].youhui}`);
				$('.msg_box .red2').html(`已优惠￥${yhj}元`);
				$('div.look img.small').attr({'src':data[i].img});
				$('div.look img.ig1').attr({'src':data[i].img});

				// 放大镜插件
				$('.smallImg').gdszoom({width:600,gap:10});
			}
		}
	})
	console.log($('div.look items img.ig1'));
	$('.ad').on('click',function(e){
		e.preventDefault();
		$('.sl')[0].value++;
	})
	$('.di').on('click',function(e){
		e.preventDefault();
		if($('.sl')[0].value>0){
			$('.sl')[0].value--;
		}

	})
	// arr=getCookie('goods');
	// goods=JSON.parse(getCookie('goods'));
	// arr=JSON.parse(arr);
	$('.jiaru').on('click',function(e){
		var cx=e.clientX-30;
		var cy=e.clientY-30;
		var $img=$('img.small').clone();
		$img.css({'width':60,'height':60,'borderRadius':30,'background':'url()','position':'fixed','top':cy,'left':cx }).appendTo($(this)).animate({'top':180,'left':$(window).width(),'width':20,'height':20},function(){
				$(this).remove();
		});
		var num=$('.sl')[0].value;
	    // arr=getCookie('goods');
			// try{
				
			console.log(arr);
			// }catch(err){
			// 	arr=[];
			// }
			goods={guid:guid,num:num};
			if(getCookie('goods')){
				arr=JSON.parse(getCookie('goods'));
				arr.push(goods);
				console.log(arr);
				arr=JSON.stringify(arr);
				setCookie('goods',arr,7)
				
				console.log(getCookie('goods'));
				// goods=JSON.parse(getCookie('goods'));
				// arr=JSON.parse(arr);
			}else{
				var arr=[];
				arr.push(goods);
				console.log(arr);
				arr=JSON.stringify(arr);
				setCookie('goods',arr,7)

			}
			console.log(arr);
			
			
	})

	

    

     // 切换图片
    $('.look ul li img').on('click',function(){
    	$('.look ul li img').removeClass('active');
    	$(this).addClass('active');
        console.log( $(this).attr('src') );
        var $newsrc = $(this).attr('src');
        $('.gdszoom-big').remove();
        $('.minzoom').remove();

        $('.small').attr({ "src" : $newsrc});
   		$('.smallImg').gdszoom({width:500,height:500,gap:10});

    })

})