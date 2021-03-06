/*Image Slider Code
var i = 0;
var path = new Array();
path[0] = "a.JPG";
path[1] = "b.JPG";
path[2] = "c.JPG";
path[3] = "d.JPG";
function swapImage()
{
   document.back.src = path[i];
   if(i < path.length - 1) i++; else i = 0;
   setTimeout("swapImage()",3000);
}
window.onload=swapImage;
*/

//Defining and calling stretchArrow
function stretchArrow(){
  _width = Math.floor($(window).width() / 2);

  $('.footer-arrow').css('border-width', '0 ' + _width + 'px 100px ' + _width + 'px');
  
}  
$(window).resize(function(){
  stretchArrow();
  if($(window).width()<1200)
	{
	$('#home').hide();
	$('#small').html('<div class="row"style="background-image:url(&#39;static/team/a.jpg&#39;);background-size: cover;height:100%"><div class="col s4 m2 offset-m1"style="padding-top:10%"><div class="card"><div class="card-image"><img src="static/icons/au1.png"><span class="card-title"></span></div><div class="card-action"><center><b><a href="#about"class="black-text"style="font-size:12px">About</a></b></center></div></div></div><div class="col s4 m2"style="padding-top:10%"><div class="card"><div class="card-image"><img src="static/icons/pe1.png"><span class="card-title"></span></div><div class="card-action"><center><b><a href="#history"class="black-text"style="font-size:12px">History</a></b></center></div></div></div><div class="col s4 m2"style="padding-top:10%"><div class="card"><div class="card-image"><img src="static/icons/e1.png"><span class="card-title"></span></div><div class="card-action"><center><b><a href="#events"class="black-text"style="font-size:12px">Events</a></b></center></div></div></div><div class="col s4 m2 offset-s2"style="padding-top:10%"><div class="card"><div class="card-image"><img src="static/icons/ot1.png"><span class="card-title"></span></div><div class="card-action"><center><b><a href="#team"class="black-text"style="font-size:12px">Team</a></b></center></div></div></div><div class="col s4 m2"style="padding-top:10%"><div class="card"><div class="card-image"><img src="static/icons/cu1.png"><span class="card-title"></span></div><div class="card-action"><center><b><a href="#contact"class="black-text"style="font-size:12px">Contact</a></b></center></div></div></div></div>');
	$('#small').show();
	}
  else
	{
	$('#home').show();
	$('#small').hide();
	}
	
  if($(window).width()<400)
  {
    $('#foot-logo').css('width', '30px').css('left', '45.5%').css('bottom', '14.5%');
	$('.nav-text').css('font-size','15px');
	$('.head').css('font-size','35px');	
	$('#images').hide();
	$('#up_tab').click();
	$('#up_tab').html('Upcoming');
	$('#up_tab').css('font-size','12px');
	$('#pre_tab').html('Premium');
	$('#pre_tab').css('font-size','12px');
	$('#week_tabs').hide();
	$('#week_tabs').html("");
	$('#weekly').hide();
	$('#gra_tab').html("graVITas");
	$('#gra_tab').css('font-size','12px');
	$('#riv_tab').html("Riviera");
	$('#riv_tab').css('font-size','12px');
	$('#fac_tab').html('Faculty');
	$('#fac_tab').css('font-size','12px');
	$('#board_tab').html('Board');
	$('#board_tab').css('font-size','12px');
	$('#core_tab').html('Core');
	$('#core_tab').css('font-size','12px');
  }	
  else if($(window).width()<500)
  {
    $('#foot-logo').css('width', '30px').css('left', '47%').css('bottom', '14.5%');
	$('.nav-text').css('font-size','15px');
	$('.head').css('font-size','35px');	
	$('#images').hide();
	$('#up_tab').click();
	$('#up_tab').html('Upcoming');
	$('#up_tab').css('font-size','12px');
	$('#pre_tab').html('Premium');
	$('#pre_tab').css('font-size','12px');
	$('#week_tabs').hide();
	$('#week_tabs').html("");
	$('#weekly').hide();
	$('#gra_tab').html("graVITas");
	$('#gra_tab').css('font-size','12px');
	$('#riv_tab').html("Riviera");
	$('#riv_tab').css('font-size','12px');
	$('#fac_tab').html('Faculty');
	$('#fac_tab').css('font-size','12px');
	$('#board_tab').html('Board');
	$('#board_tab').css('font-size','12px');
	$('#core_tab').html('Core');
	$('#core_tab').css('font-size','12px');
  }
  else if($(window).width()<700)
  {
    $('#foot-logo').css('width', '5%').css('left', '47.5%').css('bottom', '14%');
	$('.nav-text').css('font-size','20px');	
	$('.head').css('font-size','60px');	
	$('#images').hide();
	$('#up_tab').click();
	$('#up_tab').html('Upcoming');
	$('#pre_tab').html('Premium');
	$('#week_tabs').show();
	$('#week_tabs').html('<li class="tab col s12"><a id="week_tab" href="#weekly" class="black-text lighten-1"></a></li>');
	$('#week_tab').html('Weekly');
	$('#weekly').hide();
	$('#week_tabs').click(function(){
	$('#week_tab').click();
	$('#weekly').show();	
	});
	$('#week_tab').css('font-size','16px');
	$('#gra_tab').html("graVITas'15");
	$('#riv_tab').html("Riviera'16");
	$('#fac_tab').html('Faculty');
	$('#board_tab').html('Board');
	$('#core_tab').html('Core');
  }
  else
  {
    $('#foot-logo').css('width', '5%').css('left', '47.8%').css('bottom', '11%');
	$('.nav-text').css('font-size','20px');	
	$('.head').css('font-size','60px');	
	$('#images').show();
	$('#up_tab').click();
	$('#up_tab').html('Upcoming Events');
	$('#up_tab').css('font-size','18px');
	$('#pre_tab').html('Premium Events');
	$('#pre_tab').css('font-size','18px');
	$('#week_tabs').show();
	$('#week_tabs').html('<li class="tab col s12"><a id="week_tab" href="#weekly" class="black-text lighten-1"></a></li>');
	$('#week_tab').html('Weekly Events');
	$('#weekly').hide();
	$('#week_tabs').click(function(){
	$('#weekly').show();	
	});
	$('#week_tab').css('font-size','18px');
	$('#gra_tab').html("graVITas'15");
	$('#gra_tab').css('font-size','18px');
	$('#riv_tab').html("Riviera'16");
	$('#riv_tab').css('font-size','18px');
	$('#fac_tab').html('Faculty Coordinator');
	$('#fac_tab').css('font-size','18px');
	$('#board_tab').html('Board Members');
	$('#board_tab').css('font-size','18px');
	$('#core_tab').html('Core Members');
	$('#core_tab').css('font-size','18px');
  }
});



function core(){
$('#adityan').html('<img src="static/team/adityan.jpg" style="height:100%">');
$('#aryan').html('<img src="static/team/aryan.jpg" style="height:100%">');
$('#guneet').html('<img src="static/team/guneet.jpg" style="height:100%">');
$('#mayank').html('<img src="static/team/mayank.jpg" style="height:100%">');
$('#pranav').html('<img src="static/team/pranav.jpg" style="height:100%">');
$('#sarguru').html('<img src="static/team/sarguru.jpg" style="height:100%">');
$('#snehil').html('<img src="static/team/snehil.jpg" style="height:100%">');
$('#somya').html('<img src="static/team/somya.jpg" style="height:100%">');
$('#ria').html('<img src="static/team/ria.jpg" style="height:100%">');
$('#ritika').html('<img src="static/team/ritika.jpg" style="height:100%">');
$('#ud').html('<img src="static/team/ud.jpg" style="height:100%">');
$('#vaibhav').html('<img src="static/team/vaibhav.jpg" style="height:100%">');
$('#vaishnavi').html('<img src="static/team/vaishnavi.jpg" style="height:100%">');
$('#vishu').html('<img src="static/team/vishu.jpg" style="height:100%">');
$('#yash').html('<img src="static/team/yash.jpg" style="height:100%">');
$('#sagar').html('<img src="static/team/sagar.jpg" style="height:100%">');
}

function board(){
$('#teja').html('<img src="static/team/teja.jpg" style="height:100%">');
$('#anujay').html('<img src="static/team/anujay.jpg" style="height:100%">');
$('#ankita').html('<img src="static/team/ankita.jpg" style="height:100%">');
$('#kinnri').html('<img src="static/team/kinnri.jpg" style="height:100%">');
$('#hari').html('<img src="static/team/hari.jpg" style="height:100%">');
$('#ashay').html('<img src="static/team/ashay.jpg" style="height:100%">');
$('#poroma').html('<img src="static/team/poroma.jpg" style="height:100%">');
$('#gargi').html('<img src="static/team/gargi.jpg" style="height:100%">');
$('#rishabh').html('<img src="static/team/rishabh.jpg" style="height:100%">');
$('#sid').html('<img src="static/team/sid.jpg" style="height:100%">');
}

function gravitas(){
$('#Aquabot').html('<img src="static/posters/Aquabot.jpg" style="height:100%;width:100%" />');
$('#Artificial').html('<img src="static/posters/Artificial.jpg" style="height:100%;width:100%" />');
$('#Augmented').html('<img src="static/posters/Augmented.jpg" style="height:100%;width:100%" />');
$('#Cloud').html('<img src="static/posters/CloudComputing.jpg" style="height:100%;width:100%" />');
$('#Code').html('<img src="static/posters/Code-a-thon.jpg" style="height:100%;width:100%" />');
$('#Dimensions').html('<img src="static/posters/Dimensions.jpg" style="height:100%;width:100%" />');
$('#HF').html('<img src="static/posters/HF.jpg" style="height:100%;width:100%" />');
$('#Imp').html('<img src="static/posters/Impedence.jpg" style="height:100%;width:100%" />');
$('#Robotix').html('<img src="static/posters/Robotix.jpg" style="height:100%;width:100%" />');
$('#Robogpp').html('<img src="static/posters/Robogpp.jpg" style="height:100%;width:100%" />');
$('#Stock').html('<img src="static/posters/StockGyaam.jpg" style="height:100%;width:100%" />');
$('#TAR').html('<img src="static/posters/TAR.jpg" style="height:100%;width:100%" />');
$('#TD').html('<img src="static/posters/TD.jpg" style="height:100%;width:100%" />');
$('#UE').html('<img src="static/posters/UE.jpg" style="height:100%;width:100%" />');
}

function riviera()
{
$('#race').html('<img src="static/posters/race.jpg" style="height:100%;width:100%" />');
$('#bird').html('<img src="static/posters/bird.jpg" style="height:100%;width:100%" />');
$('#prison').html('<img src="static/posters/prison.jpg" style="height:100%;width:100%" />');
$('#foosball').html('<img src="static/posters/foosball.jpg" style="height:100%;width:100%" />');	
}

//When document gets ready
$(document).ready(function(){


		//register form submit
		$("#submit").click(function() {
		var name = $("#n").val();
		var reg = $("#reg").val();
		var mob = $("#mob").val();
		var mail = $("#mail").val();
		var mem = $("#mem").val();
		var dataString = 'n='+ name + '&reg='+ reg + '&mob='+ mob + '&mail='+ mail + '&mem='+ mem;

		if(name=='' || reg=='' || mob=='' || mail=='' || mem=='')
		{
		alert("Please Fill All Fields");
		}
		else
		{
		$.ajax({
		type: "POST",
		url: "register.php",
		data: dataString,
		success: function(){
		alert("Registration Successfull!!");
		$('#modal1').closeModal();
		},
		error: function(){
		alert("Registration Failed");
		}
		});
		}
		return false;
		});




		//contact form submit
		$("#submit2").click(function() {
		var name=$("#title").val();
		var mail=$("#email").val();
		var message=$("#message").val();
		var dataString='title='+name+'&mail='+mail+'&message='+message;
		if(name==''||mail==''||message==''){
		alert("Please Fill All Fields");
		}
		else{
		$.ajax({
		type:"POST",
		url:"contact.php",
		data:dataString,
		success:function(){
		document.getElementById('form2').submit();
		document.getElementById("form2").reset();
		},
		error:function(){
		alert("Failed");}})}
		return false;
		
		});
		
		/*
		$("#submit2").click(function()
		{var name=$("#title").val();
		var mail=$("#email").val();
		var message=$("#message").val();
		var dataString='title='+name+'&mail='+mail+'&message='+message;
		if(name==''||mail==''||message==''){
		alert("Please Fill All Fields");
		}
		else{
		$.ajax({
		type:"POST",
		url:"contact.php",
		data:dataString,
		success:function(){
		alert("Thank you for Contacting Us!!!!");
		document.getElementById("form2").reset();
		},
		error:function(){
		alert("Failed");}})}
		return false;
		});
		*/



	//Responsive
	if($(window).width()<1200)
	{
	$('#home').hide();
	$('#small').html('<div class="row"style="background-image:url(&#39;static/team/a.jpg&#39;);background-size: cover;height:100%"><div class="col s4 m2 offset-m1"style="padding-top:10%"><div class="card"><div class="card-image"><img src="static/icons/au1.png"><span class="card-title"></span></div><div class="card-action"><center><b><a href="#about"class="black-text"style="font-size:12px">About</a></b></center></div></div></div><div class="col s4 m2"style="padding-top:10%"><div class="card"><div class="card-image"><img src="static/icons/pe1.png"><span class="card-title"></span></div><div class="card-action"><center><b><a href="#history"class="black-text"style="font-size:12px">History</a></b></center></div></div></div><div class="col s4 m2"style="padding-top:10%"><div class="card"><div class="card-image"><img src="static/icons/e1.png"><span class="card-title"></span></div><div class="card-action"><center><b><a href="#events"class="black-text"style="font-size:12px">Events</a></b></center></div></div></div><div class="col s4 m2 offset-s2"style="padding-top:10%"><div class="card"><div class="card-image"><img src="static/icons/ot1.png"><span class="card-title"></span></div><div class="card-action"><center><b><a href="#team"class="black-text"style="font-size:12px">Team</a></b></center></div></div></div><div class="col s4 m2"style="padding-top:10%"><div class="card"><div class="card-image"><img src="static/icons/cu1.png"><span class="card-title"></span></div><div class="card-action"><center><b><a href="#contact"class="black-text"style="font-size:12px">Contact</a></b></center></div></div></div></div>');
	$('#small').show();
	}
  else
	{
	$('#home').show();
	$('#small').hide();
	}
	
  if($(window).width()<400)
  {
    $('#foot-logo').css('width', '30px').css('left', '45.5%').css('bottom', '14.5%');
	$('.nav-text').css('font-size','15px');
	$('.head').css('font-size','35px');	
	$('#images').hide();
	$('#up_tab').click();
	$('#up_tab').html('Upcoming');
	$('#up_tab').css('font-size','12px');
	$('#pre_tab').html('Premium');
	$('#pre_tab').css('font-size','12px');
	$('#week_tabs').hide();
	$('#week_tabs').html("");
	$('#weekly').hide();
	$('#gra_tab').html("graVITas");
	$('#gra_tab').css('font-size','12px');
	$('#riv_tab').html("Riviera");
	$('#riv_tab').css('font-size','12px');
	$('#fac_tab').html('Faculty');
	$('#fac_tab').css('font-size','12px');
	$('#board_tab').html('Board');
	$('#board_tab').css('font-size','12px');
	$('#core_tab').html('Core');
	$('#core_tab').css('font-size','12px');
  }	
  else if($(window).width()<500)
  {
    $('#foot-logo').css('width', '30px').css('left', '47%').css('bottom', '14.5%');
	$('.nav-text').css('font-size','15px');
	$('.head').css('font-size','35px');	
	$('#images').hide();
	$('#up_tab').click();
	$('#up_tab').html('Upcoming');
	$('#up_tab').css('font-size','12px');
	$('#pre_tab').html('Premium');
	$('#pre_tab').css('font-size','12px');
	$('#week_tabs').hide();
	$('#week_tabs').html("");
	$('#weekly').hide();
	$('#gra_tab').html("graVITas");
	$('#gra_tab').css('font-size','12px');
	$('#riv_tab').html("Riviera");
	$('#riv_tab').css('font-size','12px');
	$('#fac_tab').html('Faculty');
	$('#fac_tab').css('font-size','12px');
	$('#board_tab').html('Board');
	$('#board_tab').css('font-size','12px');
	$('#core_tab').html('Core');
	$('#core_tab').css('font-size','12px');
  }
  else if($(window).width()<700)
  {
    $('#foot-logo').css('width', '5%').css('left', '47.5%').css('bottom', '14%');
	$('.nav-text').css('font-size','20px');	
	$('.head').css('font-size','60px');	
	$('#images').hide();
	$('#up_tab').click();
	$('#up_tab').html('Upcoming');
	$('#pre_tab').html('Premium');
	$('#week_tabs').show();
	$('#week_tabs').html('<li class="tab col s12"><a id="week_tab" href="#weekly" class="black-text lighten-1"></a></li>');
	$('#week_tab').html('Weekly');
	$('#weekly').hide();
	$('#week_tabs').click(function(){
	$('#week_tab').click();
	$('#weekly').show();	
	});
	$('#week_tab').css('font-size','16px');
	$('#gra_tab').html("graVITas'15");
	$('#riv_tab').html("Riviera'16");
	$('#fac_tab').html('Faculty');
	$('#board_tab').html('Board');
	$('#core_tab').html('Core');
  }
  else
  {
    $('#foot-logo').css('width', '5%').css('left', '47.8%').css('bottom', '11%');
	$('.nav-text').css('font-size','20px');	
	$('.head').css('font-size','60px');	
	$('#images').show();
	$('#up_tab').click();
	$('#up_tab').html('Upcoming Events');
	$('#up_tab').css('font-size','18px');
	$('#pre_tab').html('Premium Events');
	$('#pre_tab').css('font-size','18px');
	$('#week_tabs').show();
	$('#week_tabs').html('<li class="tab col s12"><a id="week_tab" href="#weekly" class="black-text lighten-1"></a></li>');
	$('#week_tab').html('Weekly Events');
	$('#weekly').hide();
	$('#week_tabs').click(function(){
	$('#weekly').show();	
	});
	$('#week_tab').css('font-size','18px');
	$('#gra_tab').html("graVITas'15");
	$('#gra_tab').css('font-size','18px');
	$('#riv_tab').html("Riviera'16");
	$('#riv_tab').css('font-size','18px');
	$('#fac_tab').html('Faculty Coordinator');
	$('#fac_tab').css('font-size','18px');
	$('#board_tab').html('Board Members');
	$('#board_tab').css('font-size','18px');
	$('#core_tab').html('Core Members');
	$('#core_tab').css('font-size','18px');
  }


	//Hide/Show Navbar
	var navoffset=$("#about").offset().top-70;
	$(window).scroll(function(){
	var scrollpos=$(window).scrollTop();
	if(scrollpos>=navoffset){								//scroll more than logo
	$("#navi").show();
	$("#navi").css({ "opacity":1,"transition": "opacity 0.4s ease" });
	}
	else{													//scroll less than logo
	$("#navi").css({ "opacity":0,"transition": "opacity 0.4s ease"});
	$("#navi").hide();
	}
	});


	
	//Initializing Collapsible
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
	
	//Initializing Parallax
    $('.parallax').parallax();
	
	//Initializing Modal
    $('.modal-trigger').leanModal();
	
	
	//Calling stretchArrow Function
    stretchArrow();
	
	
  
});
  



//Rotating Buttons

/*1.
  $( "#1" ).animate({ left:"49.7%", top:"45.1%" }, "fast" );
  $( "#2" ).animate({ left:"35.4%", top:"26.5%" }, "fast" );
  $( "#3" ).animate({ left:"20.7%", top:"45.1%" }, "fast" );
  $( "#4" ).animate({ left:"20.7%", top:"83.5%" }, "fast" );
  $( "#5" ).animate({ left:"49.7%", top:"83.5%" }, "fast" );
  $( "#6" ).animate({ left:"35.4%", top:"101.5%" }, "fast" );
  
  2.
  $( "#1" ).animate({ left:"64.8%", top:"64.5%" }, "fast" );
  $( "#2" ).animate({ left:"50%", top:"44.8%" }, "fast" );
  $( "#3" ).animate({ left:"35.4%", top:"64.5%" }, "fast" );
  $( "#4" ).animate({ left:"35.4%", top:"102%" }, "fast" );
  $( "#5" ).animate({ left:"64.6%", top:"102%" }, "fast" );
  $( "#6" ).animate({ left:"50%", top:"120.8%" }, "fast" );
  
  3.
  $( "#1" ).animate({ left:"79.5%", top:"45.2%" }, "fast" );
  $( "#2" ).animate({ left:"64.8%", top:"26.2%" }, "fast" );
  $( "#3" ).animate({ left:"50.5%", top:"45.2%" }, "fast" );
  $( "#4" ).animate({ left:"50.5%", top:"83.2%" }, "fast" );
  $( "#5" ).animate({ left:"79.5%", top:"83.2%" }, "fast" );
  $( "#6" ).animate({ left:"64.8%", top:"102.2%" }, "fast" );
  
  4.
  $( "#1" ).animate({ left:"79.5%", top:"7%" }, "fast" );
  $( "#2" ).animate({ left:"64.8%", top:"-12%" }, "fast" );
  $( "#3" ).animate({ left:"50.2%", top:"7%" }, "fast" );
  $( "#4" ).animate({ left:"50.2%", top:"45%" }, "fast" );
  $( "#5" ).animate({ left:"79.5%", top:"45%" }, "fast" );
  $( "#6" ).animate({ left:"64.8%", top:"64%" }, "fast" );
  
  5.
  $( "#1" ).animate({ left:"50%", top:"7%" }, "fast" );
  $( "#2" ).animate({ left:"35.4%", top:"-12%" }, "fast" );
  $( "#3" ).animate({ left:"20.8%", top:"7%" }, "fast" );
  $( "#4" ).animate({ left:"20.8%", top:"45%" }, "fast" );
  $( "#5" ).animate({ left:"50%", top:"45%" }, "fast" );
  $( "#6" ).animate({ left:"35.4%", top:"64%" }, "fast" );
*/

function home(){
	 $('body').animate({scrollTop:$("#first").offset().top-60},1000);
} 


function about(){
  $('body').animate({scrollTop:$("#about").offset().top-0},1000);
  $( "#1" ).animate({ left:"49.7%", top:"45.1%" }, "fast" );
  $( "#2" ).animate({ left:"50%", top:"44.8%" }, "fast" );
  $( "#3" ).animate({ left:"50.5%", top:"45.2%" }, "fast" );
  $( "#4" ).animate({ left:"50.2%", top:"45%" }, "fast" );
  $( "#5" ).animate({ left:"50%", top:"45%" }, "fast" );
}

function history(){
  $('body').animate({scrollTop:$("#history").offset().top-60},1000);
  $( "#1" ).animate({ left:"49.7%", top:"45.1%" }, "fast" );
  $( "#2" ).animate({ left:"50%", top:"44.8%" }, "fast" );
  $( "#3" ).animate({ left:"50.5%", top:"45.2%" }, "fast" );
  $( "#4" ).animate({ left:"50.2%", top:"45%" }, "fast" );
  $( "#5" ).animate({ left:"50%", top:"45%" }, "fast" );
}

function events(){
  $('body').animate({scrollTop:$("#events").offset().top-60},1500);
  $( "#1" ).animate({ left:"49.7%", top:"45.1%" }, "fast" );
  $( "#2" ).animate({ left:"50%", top:"44.8%" }, "fast" );
  $( "#3" ).animate({ left:"50.5%", top:"45.2%" }, "fast" );
  $( "#4" ).animate({ left:"50.2%", top:"45%" }, "fast" );
  $( "#5" ).animate({ left:"50%", top:"45%" }, "fast" );
}

function team(){
  $('body').animate({scrollTop:$("#team").offset().top-60},1500);
  $( "#1" ).animate({ left:"49.7%", top:"45.1%" }, "fast" );
  $( "#2" ).animate({ left:"50%", top:"44.8%" }, "fast" );
  $( "#3" ).animate({ left:"50.5%", top:"45.2%" }, "fast" );
  $( "#4" ).animate({ left:"50.2%", top:"45%" }, "fast" );
  $( "#5" ).animate({ left:"50%", top:"45%" }, "fast" );
}

function contact(){
  $('body').animate({scrollTop:$("#contact").offset().top-60},1500);
  $( "#1" ).animate({ left:"49.7%", top:"45.1%" }, "fast" );
  $( "#2" ).animate({ left:"50%", top:"44.8%" }, "fast" );
  $( "#3" ).animate({ left:"50.5%", top:"45.2%" }, "fast" );
  $( "#4" ).animate({ left:"50.2%", top:"45%" }, "fast" );
  $( "#5" ).animate({ left:"50%", top:"45%" }, "fast" );
}

function first(){
  $( "#1" ).animate({ left:"35.4%", top:"101.5%" }, "fast" );
  $( "#2" ).animate({ left:"35.4%", top:"64.5%" }, "fast" );
  $( "#3" ).animate({ left:"50.5%", top:"83.2%" }, "fast" );
  $( "#4" ).animate({ left:"79.5%", top:"45%" }, "fast" );
  $( "#5" ).animate({ left:"50%", top:"7%" }, "fast" );
  
  setTimeout('about()',200);
  }
  
function second() {
  $( "#1" ).animate({ left:"20.7%", top:"45.1%" }, "fast" );
  $( "#2" ).animate({ left:"50%", top:"120.8%" }, "fast" );
  $( "#3" ).animate({ left:"50.5%", top:"83.2%" }, "fast" );
  $( "#4" ).animate({ left:"79.5%", top:"45%" }, "fast" );
  $( "#5" ).animate({ left:"50%", top:"7%" }, "fast" );
  
  setTimeout('history()',200);
}

function third() {
  $( "#1" ).animate({ left:"20.7%", top:"45.1%" }, "fast" );
  $( "#2" ).animate({ left:"35.4%", top:"102%" }, "fast" );
  $( "#3" ).animate({ left:"64.8%", top:"102.2%" }, "fast" );
  $( "#4" ).animate({ left:"79.5%", top:"45%" }, "fast" );
  $( "#5" ).animate({ left:"50%", top:"7%" }, "fast" );
  
  setTimeout('events()',200);
}

function fourth() {
  $( "#1" ).animate({ left:"20.7%", top:"45.1%" }, "fast" );
  $( "#2" ).animate({ left:"35.4%", top:"102%" }, "fast" );
  $( "#3" ).animate({ left:"79.5%", top:"83.2%" }, "fast" );
  $( "#4" ).animate({ left:"64.8%", top:"64%" }, "fast" );
  $( "#5" ).animate({ left:"50%", top:"7%" }, "fast" );
  
  setTimeout('team()',200);
}

function fifth() {
  $( "#1" ).animate({ left:"20.7%", top:"45.1%" }, "fast" );
  $( "#2" ).animate({ left:"35.4%", top:"102%" }, "fast" );
  $( "#3" ).animate({ left:"79.5%", top:"83.2%" }, "fast" );
  $( "#4" ).animate({ left:"79.5%", top:"7%" }, "fast" );
  $( "#5" ).animate({ left:"35.4%", top:"64%" }, "fast" );
  
  setTimeout('contact()',200);
}

