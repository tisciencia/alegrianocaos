$(function(){var o=$("#progress");$(window).scroll(function(){var l=$(window).scrollTop();l>=2700&&o.removeClass("display-none").addClass("display")})}),$(".scroll").click(function(o){o.preventDefault(),$("html,body").animate({scrollTop:$(this.hash).offset().top},300)}),$("#navbar").scrollspy(),$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>100?$(".scrollToTop").fadeIn():$(".scrollToTop").fadeOut()}),$(".scrollToTop").click(function(){return $("html, body").animate({scrollTop:0},600),!1})});