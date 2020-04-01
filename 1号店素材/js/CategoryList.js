//按照价格排序
//true升序，false降序
var isDesc = false;
var $listBox = $(".cate_list");
$("#sortPrice").click(function(){
	//创建一个虚拟节点，并不占用DOM文档结构，用于存放后的商品
	var fragment = document.createDocumentFragment();
	//toArray()数组的形式返回jQuery,选择器匹配元素
	//得到了由一个商品组成是数组，对这个数组去升序或者降序排序就可以
	var list = $(".cate_list").find("li").toArray();//toArray()转换数组
	//先升序
	isDesc = !isDesc
	//li1,li2为list集合中参与排序比较两个元素
	list.sort(function(li1,li2){
		//$(".price span",li1)相当于$(li1).find(selector)或者li1.find(selector)
		var price1 = $(".price span",li1).text().substring(1);
		var price2 = $(".price span",li2).text().substring(1);
		//升序排序规则：若a小于b，在排序后的数组中a应该出现在b之间，则返回一个小于0的值
		//若a等于b，则返回0
		//若a大于b，则返回一个大于0的值
		var diff = price1 - price2;
		return isDesc ? diff : -diff;
	});
	//map()方用于遍历数组，参数list为要遍历的数组，第二个参数是每次遍历时候做的操作，参数为li为集合的元素
	$.map(list,function(li){
		//把集合中的每个参数作为子元素添加到创建的fragment虚拟节点中
		fragment.appendChild(li);
	})
	//清空$listBox的元素
	$listBox.empty();
	//把已经排好的商品信息，再次存到$(".cate_list")元素中去
	$listBox.append(fragment);
});
