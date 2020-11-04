// Grabs name and the my name function form model.js //
import * as MODEL from '../model/model.js';


// Functions for when the document is ready //
function init(){
    $(".get").click(() => {
        console.log("name ", MODEL.myName);
        console.log("secret name ",MODEL.getMyName());
    })
}


$(document).ready(function(){
    init();
})