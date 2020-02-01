
$("#grayButton").on("click",grayScheme);
$("#whiteButton").on("click",whiteScheme);

$("#switcher").append("<li id='blueButton'></li>");
$("#blueButton").on("click",blueScheme);



function grayScheme(){
    $("body").css("background-color","gray");
    $("body").css("color","white");

    // Empty out the .csSwitchStatus
    $(".csSwitchStatus").empty();

    // Add a paragraph with the status "Gray"
    $(".csSwitchStatus").append("<p>Gray</p>")

}

function whiteScheme(){
    $("body").css("background-color","white");
    $("body").css("color","black");

    // Empty out the .csSwitchStatus
    $(".csSwitchStatus").empty();

    // Add a paragraph with the status "Gray"
    $(".csSwitchStatus").append("<p>White</p>")
}

function blueScheme(){
    $("body").css("background-color","rgb(30,40,90)");
    $("body").css("color","white");

    // Empty out the .csSwitchStatus
    $(".csSwitchStatus").empty();

    // Add a paragraph with the status "Gray"
    $(".csSwitchStatus").append("<p>Blue</p>")
}
