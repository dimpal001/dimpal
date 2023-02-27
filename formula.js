$(function(){
    $("#alerts1").click(function(){
        $("#sgpa").fadeOut(500);
        $("#sgpa").fadeIn(900);
        setTimeout(function(){
            $("#alerts1").addClass("d-none");
        $("#sgpa").addClass("px-md-3");
        $("#alert-text").text("This website is temporarily down for maintenance. We will be back online shortly.")
        $("#alerts2").removeClass("d-none");
        },600)
    })
    $("#alerts2").click(function(){
        $("#sgpa").fadeOut(500);
        $("#sgpa").fadeIn(900);
        setTimeout(function(){
        $("#alerts2").addClass("d-none");
        $("#alert-text").text("SGPA Calculator")
        $("#alerts1").removeClass("d-none");
        },600)
    })
    $("#btn").click(function(){
        $("#main").fadeOut(500);
        $("#main").fadeIn(900);
        $("#btn").fadeOut(500);
        setTimeout(function(){
            $("#myProfile").html("Welcome<br><h6>You are already in this website.</h6>")
        },600)
    })
    $("#imgs").click(function(){
        $("#imgs").fadeOut(500);
        $("#imgs").fadeIn(500);
    })
});