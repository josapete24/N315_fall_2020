function init(){
    $(".navicon").click(function(e){
        $("nav").addClass("navMobileView");
        $(".links").css("display:flex");
    })
}

$(document).ready(init());