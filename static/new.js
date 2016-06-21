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
	$('#small').show();
	$("#navi").css({ "opacity":1,"transition": "opacity 0.4s ease" });
	}
  else
	{
	$('#home').show();
	$('#small').hide();
	$("#navi").css({ "opacity":0,"transition": "opacity 0.4s ease" });
	}
});


//When document gets ready
$(document).ready(function(){

	//Responsive
	if($(window).width()<1200)
	{
	$('#home').hide();
	$('#small').show();
	$("#navi").css({ "opacity":1,"transition": "opacity 0.4s ease" });
	}
  else
	{
	$('#home').show();
	$('#small').hide();
	$("#navi").css({ "opacity":0,"transition": "opacity 0.4s ease" });
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

