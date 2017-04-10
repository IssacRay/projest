$(function(){
	var $listMain=$('.list_main');
	
	$.ajax({
		type:'post',
		url:'../php/list.php',
		dataType:'json',
		success:function(data){
			console.log(data);
			for(var i=0;i<data.length;i++){
				$goods=$('<div/>');
				var url='goods.html?guid='+data[i].id;
				var $str='';
				$str=`
						<a href='${url}'><img src="${data[i].img}" alt=""></a>
						<div class="price">
							<strong class='pic'>￥${data[i].price}</strong>
							<span>关注度: <i>111111</i></span>
							<p><a href="" alt='${data[i].firstname}'>${data[i].firstname}</a></p>
							<p class='org'>${data[i].youhui}</p>
						</div>
						<table>
							<tr>
								<td><a href="">101</a></td>
								<td><a href="">收藏</a></td>
								<td class='push'><a href="">加入购物车</a></td>
							</tr>
						</table>
				`
				$goods.addClass('goods').html($str).appendTo($listMain);

			}
		}
	})
	$listMain.on('click','.push',function(e){
		e.preventDefault();
		var cx=e.clientX-30;
		var cy=e.clientY-30;
		console.log(cx);
		console.log(cy);

		var $img= $(this).parents('.goods').children('img').clone();
		console.log($img)

		$img.css({'width':60,'height':60,'borderRadius':30,'background':'url()','position':'fixed','top':cy,'left':cx }).appendTo($(this)).animate({'top':180,'left':$(window).width(),'width':20,'height':20},function(){
				$(this).remove();

		});

	})
	var $box=$('.hot2 .box1');
	$box.mouseenter('.box1',function() {
		$(this).animate({'top':-64});
	}).mouseleave('.box1',function() {
		$(this).animate({'top':0});
	});
})