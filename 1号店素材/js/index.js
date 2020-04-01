//顶部客户服务二级菜单
$('.ss_list').mouseover(function(){
	//stop()停止当前运行的动画（停止上次没播放完成的动画）
	//slideDown()显示匹配的元素,通过使用滑动效果，显示隐藏的被选元素
	//slideUp()隐藏
	$('.ss_list_bg').stop().slideDown(2000);
}).mouseout(function(){
	$('.ss_list_bg').stop().slideUp(1000);
});
//购物车的显示和隐藏
$('.i_car').mouseenter(function(){
	$('.last').stop().fadeIn("fast");//fadeIn()淡入
//	$('.last').css("display","block");
	
}).mouseleave(function(){
	$('.last').stop().fadeOut("slow");//fadeout()淡出
//	$('.last').css("display","none");
});
//$(this)哪个触发click()事件哪个就是this;
//删除商品
$('.J_btnDelete').click(function(){
	//删除当前按钮的祖先元素li
	$(this).parents("li").remove();
	//计算剩余商品总金额
	totalCount();
});
//添加商品数量
$('.J_btnAddCount').click(function(){
	//获取当前商品数量
	//prev()获取前一个兄弟节点,next()获取后一个兄弟节点
	//attr("value")获取Value属性的值
	var currentCount = parseInt($(this).prev().attr("value"));//parseInt() 函数解析一个字符串参数，并返回一个指定基数的整数
	currentCount++;
	//改变文本框中的数值
	//attr("value",currentCount)修改元素的value属性值
	$(this).prev().attr("value",currentCount);
	//同时修改当前商品合计金额
	//获取当前商品单价
	var unitPrice = $(this).parent().parent().prev('p').children('span').html().substring(4);// children()方法返回被选元素的所有直接子元素
	$(this).parent().next().html("&yen;"+parseFloat(unitPrice * currentCount).toFixed(2));//toFixed(2)保留两位小数
	//修改上面的：共一件商品
	//find()方法获得当前元素中每个后代元素
	$(this).parents("li").find(".J_count").html("共"+currentCount+"件商品");
	totalCount();
});
//减少商品数量
$('.J_btnDelCount').click(function(){ 
	//获取当前商品数量
	var currentCount=parseInt($(this).next().attr("value"));
	if(currentCount<=1){
		if(confirm("确定要删除这件商品吗？")){
			$(this).parents('li').remove();}
	}else{
		//改变文本框中的数值
		currentCount--;
		$(this).next().attr("value",currentCount);
		//同时修改商品合计金额
		//获取当前商品单价
		var unitPrice=$(this).parent().parent().prev('p').children("span").html().substring(4);
			$(this).parent().next().html("&yen;"+parseFloat(unitPrice*currentCount).toFixed(2));
			$(this).parents("li").find(".J_count").html("共"+currentCount+"件商品");
	}
});
//计算改变以后的商品数量和总金额
function totalCount(){
	//合计金额
	var total=0;
	//剩余商品数量
	var count=0;
	$(".J_inputCount").each(function(){
		count += parseFloat($(this).val());
	});
	$(".J_totalCount").html("("+count+")");
	//计算剩余商品合计金额
	$(".J_smallTotalPrice").each(function(){
		total+=parseFloat($(this).text().substring(1));//+=是变量加上右侧表达式的值之后再重新复制给变量，
	});
	//改变合计金额
	$(".J_totalPrice").html("&yen;"+total);
}

$(document).ready(function(){
	$(".leftNav ul li").hover(function(){
	    //find()方法获得当前元素中每个后代元素
		$(this).find(".fj").addClass("nuw");
		$(this).find(".zj").show();
	 },
	function(){
		$(this).find(".fj").removeClass("nuw");
		$(this).find(".zj").hide();
	 }
   )
});
