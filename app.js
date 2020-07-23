// portfolio button isotop:

$(".web_btn").click(function(){
	$(".all").filter(".two_four").hide(2000);
	$(".one_three").show(1000);
})




$(".app_btn").click(function(){
	$(".all").filter(".three_four").hide(2000);
	$(".one_two").show(1000);
})


$(".icon_btn").click(function(){
	$(".all").filter(".onetwothree").hide(2000);
	$(".four").show(1000);
})

$(".all_btn").click(function(){
	$(".all").show(1000);
})
