$(document).ready(function () {

    $("header").fadeIn("slow");








    $("#buttonOne").click(function () {
        $("#circle").fadeIn(1000);
        $("#brackets").animate({
            left: '500px'}, "slow");
    });
});