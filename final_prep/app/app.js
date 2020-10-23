function init(){
    $(".navicon").click(function(e){
        $("nav").addClass("navMobileView");
        if($(".links").is(":hidden")){
            $(".links").show();
        }else if($(".links").is(":visible")) {
            $(".links").hide();
        } ;
        console.log("true");
    })
}

$(document).ready(init());