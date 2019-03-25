// Winnende lot nummers
var LoterijWin1 = 12345;
var LoterijWin2 = 13370;
var LoterijWin3 = 69420;

// Ingevoerde naam
var Name = jQuery("#Name").val();


jQuery(".zoeken").click(zoeken);

function zoeken(){
    var input = jQuery("#invoerNum").val();
    console.log(input);
    var Name = jQuery("#Name").val();
    if($("#Name").val() == "" || $("#invoerNum").val() == "")
    {
        $("#message").html("Geen naam of lotnummer ingevoerd")
    }
    else
    {
        // Prijs 1
        if(input == LoterijWin1){
            $("#message").fadeIn();
            $("#message").html("<div>Gefeliciteerd, u heeft prijs 1 gewonnen!!</div>");
            $("#WinnerList").append("<div>" +  Name + " heeft met lotnummer " + LoterijWin1 + " wint prijs 1</div>");
            setTimeout(function(){ $("#message").fadeOut(); }, 10000);
        }
        // Prijs 2
        else if (input == LoterijWin2)
        {
            $("#message").fadeIn();
            $("#message").html("<div>"+ Name + " wint prijs 2 met lontummer " + LoterijWin2 + "</div>");
            $("#WinnerList").append("<div>" +  Name + " heeft met lotnummer " + LoterijWin2 + " wint prijs 2</div>");
            setTimeout(function(){ $("#message").fadeOut(); }, 10000);
        }
        //Prijs 3
        else if (input == LoterijWin3)
        {
            $("#message").fadeIn();
            $("#message").html("<div>"+ Name + " wint een prijs 3 met lontummer " + LoterijWin3 + "</div>");
            $("#WinnerList").append("<div>" +  Name + " heeft met lotnummer " + LoterijWin3 + " wint prijs 3</div>");
            setTimeout(function(){ $("#message").fadeOut(); }, 10000);
        }
        // Niks gewonnen.
        else{
            $("#message").html("<div>U heeft niets gewonnen</div>")
            setTimeout(function(){ $("#message").fadeOut(); }, 10000);
        }
    }
};

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    // Voor tablet en desktop
    if($(window).width() > 767) {
        x[slideIndex - 1].style.display = "inline-block";
        x[slideIndex].style.display = "inline-block";
        x[slideIndex + 1].style.display = "inline-block";
    }
    // Voor mobiel
    else{
        x[slideIndex - 1].style.display = "inline-block";
        x[slideIndex].style.display = "inline-block";
    }
}



jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
        setInterval(function () {
            moveRight();
        }, 3000);
    });

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});
setInterval(function(){ plusDivs(1); }, 500000);
