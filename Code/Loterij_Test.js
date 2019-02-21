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
            $("#message").html("<div>"+ Name + " wint prijs 1 met lontummer " + LoterijWin1 + "</div>")
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