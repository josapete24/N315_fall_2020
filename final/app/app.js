let ingredients = 3;
let steps = 3;

function initListeners(){
    $("#nav nav a").click(function (e) {
        var btnID = this.id;
        MODEL.getView(btnID);
    });

}



function initView() {
    $.get('../views/navigation.html', function(nav){
        $("#nav").html(nav);
        initListeners();
    });

    $.get('../views/home.html', function(home){    
        $("#app").html(home);
    });

    $.get('../views/footer.html', function(footer){   
        $("#footer").html(footer);
    });

}

function login() {
    MODEL.getView("login");
}


function addIngredient() {
    ingredients ++;
    $("#ingredients").append(`
        <input type="text" placeholder="Ingredient # ${ingredients}" /> <br />
    `)
}

function addStep() {
    steps ++;
    $("#instructions").append(`
        <input type="text" placeholder="Step # ${steps}" /> <br />
    `)
}

$(".navicon").click(function (e) {
    $("nav").toggleClass("navMobileView");
    console.log($(".links").css("display"));
    if ($(".links").css("display") == "none") {
      $(".links").css("display", "flex");
    } else {
      $(".links").css("display", "none");
    }
  });

  
$(document).ready(function(){
    initView();
});