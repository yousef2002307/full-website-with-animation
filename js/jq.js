

$(document).ready(function(){
   
 $('li.dropdown').hover(function(){
$(this).addClass("show");
$(this).find("div.dropdown-menu").addClass("show");
 }, function(){
  $(this).removeClass("show");
  $(this).find("div.dropdown-menu").removeClass("show");
 });
 




 $("#showcase").hover(function(){
$("#showcase .carousel-control-prev").animate({
left : "31px"
},100);
$("#showcase .carousel-control-next").animate({
  right : "31px"
  },100);
 }, function(){
  $("#showcase .carousel-control-prev").animate({
    left : "-121px"
    },100);
    $("#showcase .carousel-control-next").animate({
      right : "-121px"
      },100);
 });


 $(".testmonials").hover(function(){
  $(".testmonials .slick-prev").animate({
  left : "0px"
  },1000);
  $(".testmonials .slick-next").animate({
    right : "0px"
    },1000);
   }, function(){
    $(".testmonials .slick-prev").animate({
      left : "-238px"
      },1000);
      $(".testmonials .slick-next").animate({
        right : "-238px"
        },1000);
   });
  
$(".navbar-toggler ").click(function(){
  $(".navbar-collapse").toggleClass("sho");
if($(".navbar-collapse").hasClass("sho")){
  $("body").animate({
    paddingRight : "250px"
  },200);
  console.log("hjhhh");
  
}else{
  $("body").animate({
    paddingRight : "0px"
  },200);
  console.log("man");
  
}
if($(".navbar-collapse").hasClass("sho")){
  $(".navbar-collapse").animate({
    right : "0px"
  },200);
  console.log("hjhhh");
  
}else{
  $(".navbar-collapse").animate({
    right : "-250px"
  },200);
  console.log("hjhhh");
  
}

});

$(window).resize(function(){
  console.log($(this).outerWidth())
if($(window).outerWidth() >= 992){
  $("body").animate({
    paddingRight : "0px"
  },100);
  $(".navbar-collapse").removeClass("show sho");
}
});
$(window).scroll(function(){

  
if($(window).scrollTop() >= $(".statics").offset().top -650){
  $(".statics h3").countTo();
  $(window).off('scroll');
}

});

$(".big-img").each(function(){

$(this).find("img").height($(this).height());
});
$(".main-blog a").click(function(e){
e.preventDefault();
$(this).parent().addClass("active");
$(this).parent().siblings().removeClass("active");
console.log($(this).data("shuffle"));
$($(this).data("shuffle")).parent(".col-lg-3").hide().fadeIn(1000);
$("img").not($(this).data("shuffle")).parent(".col-lg-3").css("display","none");
});

  /*

$(function() {  
    $("body").niceScroll();
});
*/

});
