//注册页面，表单错误提示
var $phone =$("input[name='phone']");
var $password= $("input[name= 'password']");
var $repassword=$("input[name ='password']");

$phone.blur(function(){//blur失焦
	
	var regExp =/^1[3578]\d{9}$/;
	var phone = $phone.val();
	if(!regExp.test(phone)){
		$phone.val("请输入以13，15，17，18开头的11位数字");
		$phone.css("color","red");
	}
});
$password.blur(function(){
	var regExp=/^\w{6,10}$/;
	var pwd=$password.val();
	if(!regExp.test(pwd)){
		alert("请输入6～10位字母、数字、下划线");
	}
});

$repassword.blur(function(){
	var pwd =$password.val();
	var repwd = $repassword.val();
	if(pwd != repwd){
		alert("两次输入的密码不一致！请重新输入");
		
	}
});

var min = 60;
var time;
$('.tableText').click(function(){
	clearInterval(time);
	time = setInterval(fn,1000);
	
});

function fn(){
	min = --min;
	if(min > 0){
		$('.tableText').html('('+min +'秒)重发');
		
	}else{
		min=60;
		$('.tableText').html('发送验证码')
	}
}
