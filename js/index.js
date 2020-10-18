$(function(){

	var text_data=[
		{
			t1:'TB/r',
			t2:33.1,
			t3:'SHX146',
			t4:'www.sougou.com',
			t5:'BTB'
		},
		{
			t1:'TB1/r',
			t2:33.13,
			t3:'SHX2146',
			t4:'ww3w.sougou.com',
			t5:'BT1B'
		},
		{
			t1:'TB2/r',
			t2:333.1,
			t3:'S4HX146',
			t4:'ww2w.sougou.com',
			t5:'BT4B'
		},
		{
			t1:'T5B/r',
			t2:337.1,
			t3:'SH8X146',
			t4:'ww8w.sougou.com',
			t5:'B4TB'
		},
		{
			t1:'TB6/r',
			t2:337.1,
			t3:'S3HX146',
			t4:'ww45w.sougou.com',
			t5:'BT5B'
		},
		{
			t1:'T423B/r',
			t2:3343.1,
			t3:'S423HX146',
			t4:'ww55w.sougou.com',
			t5:'BT67B'
		},
		{
			t1:'T11B/r',
			t2:337.1,
			t3:'S2HX146',
			t4:'www43.sougou.com',
			t5:'BT72B'
		},
		{
			t1:'T62B/r',
			t2:335.1,
			t3:'SH46X146',
			t4:'ww2234w.sougou.com',
			t5:'BT3B'
		},
		{
			t1:'TB6/r',
			t2:33.71,
			t3:'SHX146',
			t4:'w5634ww.sougou.com',
			t5:'B4TB'
		},
		{
			t1:'T643B/r',
			t2:33534.1,
			t3:'S534HX146',
			t4:'ww5345w.sougou.com',
			t5:'BT34B'
		},
		{
			t1:'TB45/r',
			t2:3453.1,
			t3:'SHX146',
			t4:'wwwrtw.sougou.com',
			t5:'BThrtB'
		},
		{
			t1:'TtB/r',
			t2:33.2351,
			t3:'SH645X146',
			t4:'www656.sougou.com',
			t5:'BT656B'
		}
	]

	$('.dial_part_top p').eq(1).html(text_data[0]['t1']);
	$('.dial_part_top p').eq(2).html(text_data[0]['t2']);
	$('.dial_part_left p').eq(1).html(text_data[0]['t3']);
	$('.dial_part_bottom p').eq(1).html(text_data[0]['t4']);
	$('.dial_part_center').html(text_data[0]['t5']);

	var flag=0;
	var m_flag=0;
	var sum_deg=0;
	function change(num){

		sum_deg+=twl(m_flag,flag)*30;
		
		$('.dial_circle').css({
			transition:'all 1s ease',
			transform:'rotate('+sum_deg+'deg)'
		});

		$('.dial_part_top p').eq(1).html(text_data[num]['t1']);
		$('.dial_part_top p').eq(2).html(text_data[num]['t2']);
		$('.dial_part_left p').eq(1).html(text_data[num]['t3']);
		$('.dial_part_bottom p').eq(1).html(text_data[num]['t4']);
		$('.dial_part_center').html(text_data[num]['t5']);
		m_flag=flag;
		
	}

	function autoplay(){
		flag-=3;
		if (flag<0){
			flag=12+flag;
		}
		change(flag);
	}
	var dia_sec;
	var dia_start=function(){dia_sec=setInterval(autoplay,3000)};

	var dia_stop=function(){clearInterval(dia_sec)};

	dia_start();

	$('.dial_circle img').click(function(){
		dia_stop();
		flag=$(this).index();
		change(flag);
		dia_start();
	});


	function twl(t1,t2){
		if(t1==0){
			return 12-t2;
		}else if(t1==1){
			if(t2==0){
				return 1
			}else{
				return 13-t2;
			}
		}else if(t1==2){
			if(t2==1||t2==0){
				return 2-t2;
			}else{
				return 14-t2;
			}
		}else if(t1==3){
			if(t2==0||t2==1||t2==2){
				return 3-t2;
			}else{
				return 15-t2;
			}
		}else if(t1==4){
			if(t2==0||t2==1||t2==2||t2==3){
				return 4-t2;
			}else{
				return 16-t2;
			}
		}else if(t1==5){
			if(t2==0||t2==1||t2==2||t2==3||t2==4){
				return 5-t2;
			}else{
				return 17-t2;
			}
		}else if(t1==6){
			if(t2==0||t2==1||t2==2||t2==3||t2==4||t2==5){
				return 6-t2;
			}else{
				return 18-t2;
			}
		}else if(t1==7){
			if(t2==0||t2==1||t2==2||t2==3||t2==4||t2==5||t2==6){
				return 7-t2;
			}else{
				return 19-t2;
			}
		}else if(t1==8){
			if(t2==0||t2==1||t2==2||t2==3||t2==4||t2==5||t2==6||t2==7){
				return 8-t2;
			}else{
				return 20-t2;
			}
		}else if(t1==9){
			if(t2==0||t2==1||t2==2||t2==3||t2==4||t2==5||t2==6||t2==7||t2==8){
				return 9-t2;
			}else{
				return 21-t2;
			}
		}else if(t1==10){
			if(t2==0||t2==1||t2==2||t2==3||t2==4||t2==5||t2==6||t2==7||t2==8||t2==9){
				return 10-t2;
			}else{
				return 22-t2;
			}
		}else if(t1==11){
			if(t2==0||t2==1||t2==2||t2==3||t2==4||t2==5||t2==6||t2==7||t2==8||t2==9||t2==10){
				return 11-t2;
			}else{
				return 23-t2;
			}
		}
	}





});


$(function(){
	// $('.menu').click(function(){
	// 	if($('.header ul').css('display')=="none"){
	// 		$(this).css('box-shadow','0 0 15px rgba(20,138,215,.4)');
	// 		$('.header ul').slideDown();
	// 	}else{
	// 		$(this).css('box-shadow','none');
	// 		$('.header ul').slideUp();
	// 	}
	// })
	$(window).scroll(function(){
		var otop=$(window).scrollTop();
		if(otop>=0){
			$(".header").css("position","fixed").css("top","0px");
			$(".dia_cont").css('margin-top','50px');
		}else{
			$(".header").css("position","relative");
			$(".dia_cont").css('margin-top','0px')
		}
	});

	//$('.box').css('margin-top',-$('dial').width()/2+'px');

	$('.box').css('margin-top',-$('.dial').width()/2-10);

	$('.sign_in').click(function(){
		$('.cover').fadeIn();
		$('.out_box').slideDown();
		$('body').css('overflow','hidden');
	});
	$('.get_it').click(function(){
		$('.cover').fadeOut();
		$('.out_box').slideUp();
		$('body').css('overflow','auto');
	});


})