//This is my controller for my app

function showText(data) {
    $(".content").html(data);
    $(".loader").css("display", "none");
}

function initListeners(){
    $("nav a").click(function(e){
        //This is using e to find id
        console.log("click ", e.currentTarget.id);
        //This is jQuery's way to do it
        //console.log("jquery", this.id);
        //let btnId = this.id;
        $(".loader").css("display", "block");

        if (e.currentTarget.id == "home") {
            MODEL.getHome(showText);
        }
        if (e.currentTarget.id == "products") {
            MODEL.getProducts(showText);
        }
        if (e.currentTarget.id == "about") {
            MODEL.getAbout(showText);
        }
        if (e.currentTarget.id == "contact") {
            MODEL.getContact(showText);
        }
        //This syntax is called template literal
        //$(".content").html(`<h1>This is a variable name ${btnId}</h1>`);
    });
};


$(document).ready(function() {
    initListeners();
});
