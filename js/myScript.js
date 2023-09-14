//Counting section script
$(document).ready(function () {

	$("#counter-one").animateNumbers(200, true, 5000);
	$("#counter-two").animateNumbers(50, true, 5000);
	$("#counter-three").animateNumbers(500, true, 5000);
	$("#counter-four").animateNumbers(25, true, 5000);

});

//Navbar area
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $(".nav-scrollBackground").css("background", "rgba(0,0,0, .6)");
        }
        else {
            $(".nav-scrollBackground").css("background", "");
        }
    });
});

// Wow js script area

new WOW().init();

