// Grabs name and the my name function form model.js //
import * as MODEL from '../model/model.js';

var userNumber = 0;

// Functions for when the document is ready //
function init(){

    // Allows a user to login
    $(".get").click(() => {
        console.log("name ", MODEL.myName);
        console.log("secret name ",MODEL.getMyName());
    })

    // this is for a user signing up //
    $("#submitBtn").click((e) => {
        e.preventDefault();

        let un = $("#uName").val();
        let pw = $("#pWord").val();
        MODEL.userSignup(un, pw);

    });

    // This is for a user to log out //
    $("#logOut").click((e) => {
        e.preventDefault();
        MODEL.logOutUser();
    })

    // This is for a user to log in //
    $("#logIn").click((e) => {
        e.preventDefault();
        let un = "jowens1678@yahoo.com";
        let pw = "password";
        MODEL.logInUser(un, pw);
    });

    // we are adding data //
    $("#addData").click((e) => {
        e.preventDefault();

        let studentName = "Student" + userNumber;
        let studentClass = "class" + userNumber;
        userNumber ++;

        let stuObject  = {
            studentName: studentName,
            studentClassNumber: studentClass,
        };

        MODEL.addStudent(stuObject);
    });

    // This one gets all of the data //
    $("#getData").click((e) => {
        e.preventDefault();

        MODEL.getData();
    });
}


$(document).ready(function(){
    MODEL.initFireBase();
    init();
})