$(document).ready(function(){

  $("#userInfo").submit(function(event){
    event.preventDefault();

    var userName = $("#userName").val();
    var dob = $("#userBorn").val();
    dob = parseInt(dob.slice(0, 4));
    var color = $("#userColor").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var points = 0;

  });

});

var calcPoints = function(dob, userName, userColor, gender) {

  //userName points
  if (userName.length() >= 5) {
    points++;
  } else if (userName.length() === 7) {
    points = points+5;
  } else {
    points--;
  };

  //DOB points
  if (dob >= 1990 && <= 1997) {
    points++;
  } else if (dob < 1990) {

  }


}
