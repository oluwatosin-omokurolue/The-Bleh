
$(".btn-p").click(function(){
    var signUp = prompt("Do you have an account with us?")
    var firstChar = signUp.slice(0,1);
var firstUpper = firstChar.toUpperCase();
var secondChar = signUp.slice(1,signUp.length);
var secondLower = secondChar.toLowerCase();
var reply = firstUpper + secondLower;

    if (reply === "Yes"){
        alert("Let's get that funiture")
    }
    else if (reply === "No"){
        alert("Let's create an account for easy shopping")
    }

});

$(".btn-header").click(function(){
    $(".img-product").fadeOut().fadeIn();
})