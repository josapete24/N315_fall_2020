var obj = {
  Students: [
    {
      firstName: "Joshua",
      lastName: "Peterson",
      classesAndGrades: [
        {
          className: "n315",
          grade: "B",
        },
        {
          className: "n215",
          grade: "A",
        },
      ],
    },
    {
      firstName: "John",
      lastName: "Doe",
    },
  ],
};

function init() {
  //get data button

  // another form to put function is =>

  //This is a for loop and can be used with pure javascript
  $(".getData").click((e) => {
    //   for(let i=0; i < obj.Students.length; i++){
    //      console.log("obj " + i + " " , obj.Students[i]);
    //  };

    //This graes the first name of the student
    $.each(obj.Students, (idx, student) => {
      console.log(student.firstName);
      $(".content").append(student.firstName + "<br />");

      //This grabes the students grades
      $.each(student.classesAndGrades, (idx, classesAndGrade) => {
        console.log(classesAndGrade.className + " " + classesAndGrade.grade);
        $(".content").append(classesAndGrade.className + " "+ classesAndGrade.grade  + "<br />" )
    });
    });
  });

  //NavIcon
  $(".navicon").click(function (e) {
    $("nav").toggleClass("navMobileView");
    console.log($(".links").css("display"));
    if ($(".links").css("display") == "none") {
      $(".links").css("display", "flex");
    } else {
      $(".links").css("display", "none");
    }
    //console.log("click");
  });
}

$(document).ready(init());
