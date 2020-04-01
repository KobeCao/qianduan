//尺码选择和颜色选择功能
$(function(){
	//jQusery节点
	var $li1 = $("#choice1 li");
	var $li2 = $("#choice2 li");
	
	function choice(obj){
		obj.click(function(){
			//index()方法返回指定是index位置
			index = obj.index($(this));
			obj.eq(index).addClass("checked").siblings().removeClass();
		});
	}
	choice($li1);
	choice($li2);
})
//推荐搭配部分
var $teamList=$('.team_list');
var count=0;
var $checkboxes=$(".team_list input[type='checkbox']");
//用户选中/取消商品
//复选框对应的事件change()
$checkboxes.change(function(){
	//重新计算套餐的合计金额
	accounts();
});
//结算
function accounts(){
	//总金额
	count=0;
	$teamList.each(function(){
		var price=$('.price span',this).text().substring(1);
		//选中状态为true，反之为false
		var checked=$('.checkbox input',this).is(':checked');
		if(checked){
			count+=parseFloat(price);
		}
	});
	//将计算好的总金额添加
	$(".team_sum span").html(count)
}
$(document).ready(function(){
  $(".n_btn_1").click(function(){
	var  currentCount = parseInt($(this).prev().attr("value"));
	currentCount++;
	$(this).prev().attr("value",currentCount);
})
   $(".n_btn_2").click(function(){
  	var currentCount = parseInt($(this).next().attr("value"));
     if(currentCount<=1){
     	if(confirm("确定要删除这件商品吗？")){
     		$(this).parent().parent().parent(".pro_des").remove();
     	}
     }else{
     	currentCount--;
     	$(this).next().attr("value",currentCount);
     }
  })
});
