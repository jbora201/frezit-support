<!doctype html>   
<!--[if IE 6 ]><html lang="en-us" class="ie6"> <![endif]--> 
<!--[if IE 7 ]><html lang="en-us" class="ie7"> <![endif]--> 
<!--[if IE 8 ]><html lang="en-us" class="ie8"> <![endif]--> 
<!--[if (gt IE 7)|!(IE)]><!--> 
<html lang="en-US">
<head>
@include('partials.head')
@yield('extracomponents')
<style>
.wrapper {
    margin: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 80px;
}
.wrapper .container{
	position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}
footer {
    color: #fff;
    padding: 20px 0;
    font-size: 14px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
</head>
<body class="preload {{ Request::is('/') ? 'home' : '' }}">
      <div id="kenburns-bg"></div>
      <div id="firefly" class="bg-overlay">
        <canvas id="star-canvas"></canvas>
	  </div>
	   @yield('content')
	   <div id="preload">
         <div id="preload-content">
            <div class="preload-bounce">				           
               <span class="bounce1">
               </span>				           
               <span class="bounce2">
               </span>				           
               <span class="bounce3">
               </span>                   
               <span class="bounce4">
               </span>			         
            </div>
         </div>
      </div>
	  <footer>
		<script type="text/javascript" src="{{ asset('js/star.js') }}"></script>  
		<script type="text/javascript" src="{{ asset('js/init.js') }}"></script>  
		<script type="text/javascript" src ="{{ asset('js/preload.js') }}"></script> 
		@if(Request::is('/')!='home')

		@include('partials.footer')
		
		@endif
	  </footer>
</body>
</html>