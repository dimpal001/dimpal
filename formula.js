$(function(){
    $("#alerts1").click(function(){
        $("#alerts1").addClass("d-none");
        $("#sgpa").addClass("px-md-3");
        $("#alert-text").text("This website is temporarily down for maintenance. We will be back shortly.")
        $("#alerts2").removeClass("d-none");
    })
    $("#alerts2").click(function(){
        $("#alerts2").addClass("d-none");
        $("#alert-text").text("SGPA Calculator")
        $("#alerts1").removeClass("d-none");
    })
});