!function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=51)}({51:function(e,t,a){e.exports=a(52)},52:function(e,t,a){"use strict";function n(){for(var e=document.getElementsByTagName("body")[0].getElementsByTagName("section"),t=0;t<e.length;t++){switch(e[t].getAttribute("data-direction")){case"from-bottom":var a={top:"100%"},n={top:"0"},i={top:"-100%"},s={top:"0"};break;case"from-left":var a={left:"-100%",right:"100%"},n={left:"0",right:"0"},i={left:"100%"},s={left:"0"};break;case"from-right":var a={left:"100%"},n={left:"0"},i={left:"-100%"},s={left:"0"}}e[t].positions=a,e[t].destinations=n,e[t].headerDestinations=i,e[t].headerOrigins=s}}function i(e,t){if(r()){var a=document.querySelector(e);$(e).css(a.positions).css({"z-index":2}).animate(a.destinations,"easeOutQuint",function(){$(e).addClass("active")}),$("header").animate(a.headerDestinations,"easeOutQuint")}}function s(e){var t=document.querySelector("section.active");$("section.active").removeClass("active").delay(300).animate(t.positions,"easeOutQuint",function(){$(this).css({"z-index":-99999})}),$("header").delay(300).animate(t.headerOrigins,"easeOutQuint")}function r(){return $(window).width()>=768}for(var o=["images/bg1.jpg","images/bg2.jpg","images/bg3.jpg","images/bg4.jpg"],c="",u=0;u<o.length;u++)c=c+'<img src="'+o[u]+'" />';$("#kenburns-bg").prepend(c),$(window).load(function(){n();var e={speed:4e3,transition_speed:500,sub_selector:".rotate"};$("#rotate").rotator(e),$.firefly({color:"#fff",minPixel:1,maxPixel:3,total:45,on:"#firefly"}),$(".navigation .move a").click(function(){if(r()){var e=$(this).attr("href");return i(e,$(e).attr("data-direction")),!1}}),$(".close").click(function(){return s($("section.active").attr("data-direction")),!1})}),$("#kenburns-bg").kenburnsy({fullscreen:!0,duration:9e3,fadeInDuration:1200}),$(document).keyup(function(e){r()&&(38==e.keyCode&&$("#subscribe").hasClass("active")&&s($("section.active").attr("data-direction")),40==e.keyCode&&($("section.active").length?$("#brands").hasClass("active")&&!$("#subscribe").hasClass("active")&&s($("section.active").attr("data-direction")):i("#subscribe")),37==e.keyCode&&($("section.active").length?$("#contact").hasClass("active")&&!$("#about").hasClass("active")&&s($("section.active").attr("data-direction")):i("#about")),39==e.keyCode&&($("section.active").length?$("#about").hasClass("active")&&!$("#contact").hasClass("active")&&s($("section.active").attr("data-direction")):i("#contact")),27==e.keyCode&&s($("section.active").attr("data-direction")))}),$("#subscribe-form").submit(function(){return $("#response").html('<div class="loading"><span class="bounce1"></span><span class="bounce2"></span><span class="bounce3"></span><span class="bounce4"></span></div>'),$.ajax({url:"js/inc/store-address.php",data:"ajax=true&email="+escape($("#subscribe_email").val()),success:function(e){$("#response").html(e)}}),!1}),$(document).ready(function(){$("#contactForm .error").remove();var e=$("#contactForm"),t=$("#contactForm_submit"),a=$(".successMsg");e.on("submit",function(n){var i=!1;return $(".required").each(function(){if(""===jQuery.trim($(this).val()))$(this).parent().append('<span class="error"><i class="fa fa-exclamation-triangle"></i></span>'),i=!0;else if($(this).hasClass("email")){var e=/^([\w-\.]+@([\w]+\.)+[\w]{2,4})?$/;e.test(jQuery.trim($(this).val()))||($(this).parent().append('<span class="error"><i class="fa fa-exclamation-triangle"></i></span>'),i=!0)}}),i||(n.preventDefault(),$.ajax({url:"js/inc/sendemail.php",type:"POST",dataType:"html",data:e.serialize(),beforeSend:function(){a.fadeOut(),t.html("Sending....")},success:function(t){e.fadeOut(300),a.html(t).fadeIn(1e3),setTimeout(function(){a.html(t).fadeOut(300),$("#formName, #formEmail,#phone, #message").val(""),e.fadeIn(1800)},4e3)},error:function(e){}}),$(".required").val("")),!1}),$("#contactForm input").focus(function(){$("#contactForm .error").remove()}),$("#contactForm textarea").focus(function(){$("#contactForm .error").remove()})})}});