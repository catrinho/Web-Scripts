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
  		$(".search_oberlay").toggle();

	});

