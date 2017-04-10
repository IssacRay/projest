$(function(){
	var $nav=$('.nav_bar li').has('ul');
	var $box=$('.nav_bar li ul li').has('div.box');
	var $menu=$nav.children('ul');
	$menu.hide();
	$nav.mouseenter(function() {
		$menu.show();
		$box.addClass('active');
	}).mouseleave(function() {
		$menu.hide();
	});
	console.log($box);
	$box.on('mouseenter',function(){
		$(this).find('div.box').show();
	}).on('mouseleave',function(){
		$(this).find('div.box').hide();
	});
	// if(getCookie('name')){
	// 	$('#id').html(getCookie('name'));
	// }

	if(getCookie('name')){
		$('#id').html(getCookie('name'));
		$('.tuichu').html('退出');
		$('.tuichu').on('click',function(){
			setCookie('name','',-1);
			$('.tuichu').html('');
		})
	}
})