$(function(){
    setTimeout(function(){
        $("#loader").fadeOut(800);
    },1200)

    setTimeout(function(){
        $("#home").fadeIn(1000);
    },3000)
    $("#alerts1").click(function(){
        $("#prependHere").slideUp(600).slideDown(600);
        setTimeout(function(){
            $("#alerts1").addClass("d-none");
            $("#sgpa").addClass("px-md-3");
            $("#alert-text").text("This website is temporarily down for maintenance. We will be back online shortly.")
            $("#alerts2").removeClass("d-none");
        },600)
    })
    $("#alerts2").click(function(){
        $("#prependHere").slideUp(600).slideDown(600);
        setTimeout(function(){
        $("#alerts2").addClass("d-none");
        $("#alert-text").text("SGPA Calculator")
        $("#alerts1").removeClass("d-none");
        },600)
    })
    $("#btn").click(function(){
        $("#main").slideUp(600).slideDown(600);
        $("#btn").fadeOut(500);
        setTimeout(function(){
            $("#btn2").removeClass("d-none");
            $("#myProfile").html("Welcome<br><h6>You are already in this website.</h6>")
        },600)
    })
    $("#btn2").click(function(){
        $("#main").slideUp(600).slideDown(600);
        setTimeout(function(){
            $("#btn").fadeIn();
            $("#btn2").addClass("d-none");
            $("#myProfile").text("My Profile")
        },600)
    })
    $("#imgs").click(function(){
        $("#imgs").slideUp(600).slideDown(600);
    })
    $("#mylogo").click(function(){
        $("#mylogo").slideUp(600).slideDown(600);
    })
    
});