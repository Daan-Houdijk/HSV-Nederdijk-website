var LoterijWin1 = 12345;
var LoterijWin2 = 13370;
var LoterijWin3 = 69420;
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
        if(input == LoterijWin1){
            $("#message").html("<div>Gefeliciteerd, u heeft prijs 1 gewonnen!!</div>")
            $("#WinnerList").append("<div>" +  Name + " heeft met lotnummer " + LoterijWin1 + " wint prijs 1</div>")
        }
        else if (input == LoterijWin2)
        {
            $("#message").html("<div>"+ Name + " wint prijs 2 met lontummer " + LoterijWin2 + "</div>")
            $("#WinnerList").append("<div>" +  Name + " heeft met lotnummer " + LoterijWin2 + " wint prijs 2</div>")
        }
        else if (input == LoterijWin3)
        {
            $("#message").html("<div>"+ Name + " wint een prijs 3 met lontummer " + LoterijWin3 + "</div>")
            $("#WinnerList").append("<div>" +  Name + " heeft met lotnummer " + LoterijWin3 + " wint prijs 3</div>")
        }
        else{
            $("#message").html("<div>U heeft niets gewonnen</div>")
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
    x[slideIndex-1].style.display = "inline-block";
    x[slideIndex].style.display = "inline-block";
    x[slideIndex+1].style.display = "inline-block";
}