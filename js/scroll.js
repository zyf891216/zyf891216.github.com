// JavaScript Document
jQuery(document).ready(function($){  
$("a.p").click(function(){
	$('html,body').animate({
		scrollTop:$(".head").
		 offset().top}, 800);
	}); 
	$("a.r").click(function(){
	$('html,body').animate({
		scrollTop:$(".b1").
		 offset().top}, 800);
	});
	$("a.w").click(function(){
	$('html,body').animate({
		scrollTop:$(".b2").
		 offset().top}, 800);
	});
	$("a.i").click(function(){
	$('html,body').animate({
		scrollTop:$(".b3").
		 offset().top}, 800);
	});
});