// DropDown Menu
 	// $('.dropdown-menu>a').click(function() {
 	// 	// alert('click');
 	// 	$(".dropdown-list").slideToggle( "slow" );
 	// });
 	$('.dropdown-menu').mouseover(function() {
 		// alert('click');
 		$(".dropdown-list").show(200);
 	});

	$(".dropdown-list")
	  .mouseover(function() {
	  $(".dropdown-list").show(200);
	});

	$(".dropdown-list")
	  .mouseleave(function() {
	  $(".dropdown-list").hide(75);
	});
 	
 // Icon Search 

   	$(".button-search").click(function() {
  		$(".search-icon").toggleClass("open");
  		$('body').toggleClass('overNone');
  		$(".search_oberlay").slideToggle();
  		$('.nav-mobile').slideUp();
  		$('.burger').removeClass('open');
	});

   	$('.burger').click(function(){
	  $(this).toggleClass('open');
	  $('.nav-mobile').slideToggle('slow');

	  $(".search_oberlay").slideUp();
	  $(".search-icon").removeClass("open");

	});

	// Carrousel JQuery - OWL

	$('.header-slider').owlCarousel({
    items:1,
    margin:10
	});