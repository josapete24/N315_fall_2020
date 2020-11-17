let ingredients = 3;
let steps = 3;



function initListeners(){
    $("#nav nav a").click(function (e) {
        var btnID = this.id;
        MODEL.getView(btnID);

        let id = e.currentTarget.id;
    

    if (id === "add_recipe") {
        $("#app #addIngredient").click(function(e){
            console.log("add");
        });
    }
});
}




function initView() {
    $.get('views/nav.html', function(nav){
        console.log(nav);    
        $("#nav").html(nav);
        initListeners();
    });

    $.get('views/home.html', function(home){    
        $("#app").html(home);
    });

    $.get('views/footer.html', function(footer){   
        $("#footer").html(footer);
    });


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


$(document).ready(function(){
    initView();
});