 // DropDown Menu
 	// $('.dropdown-menu>a').click(function() {
 	// 	// alert('click');
 	// 	$(".dropdown-list").slideToggle( "slow" );
 	// });
 	$('.dropdown-menu').click(function() {
 		// alert('click');
 		$(".dropdown-list").show(200);
 	});

 	$(".dropdown-menu")
	  .mouseover(function() {
	  $(".dropdown-list").show(200);
	});
	$(".dropdown-menu")
	  .mouseleave(function() {
	  $(".dropdown-list").hide(400);
	});
 	
 // Icon Search 

   	$(".button-search").click(function() {
  		$(".search-icon").toggleClass("open");
  		$('body').toggleClass('overNone');
  		$(".search_oberlay").toggle();

	});


// 	Grelha da Pagina coleção... sistema tipo pinterest




