$(document).ready(function(){

  $("#userInfo").submit(function(event){
    event.preventDefault();
    var userName = $("#userName").val();
    var dob = $("#userBorn").val();
    dob = parseInt(dob.slice(0, 4));
    color = $("#userColor").val();
    gender = $("input:radio[name=gender]:checked").val();
    var pointsRes = calcPoints(dob, userName, color, gender);
    console.log(pointsRes);
    determineCeleb(pointsRes);
  });
});

var dob;
var color;
var gender;

var calcPoints = function(dob, userName, userColor, gender) {

  var points = 0;

  //userName points
  if (userName.length >= 5) {
    points++;
  } else if (userName.length === 7) {
    points = points+5;
  } else {
    points--;
  };

  //DOB points
  if (dob >= 1990 && dob <= 1997) {
    points++;
  } else if (dob < 1990) {
    points = points + 3;
  } else {
    points = points - 10;
  };

  //color points
  if (color === "red") {
    points++;
  } else if (color === "green") {
    points--;
  } else if (color === "blue") {
    points = points - 2;
  } else {
    points = points + 5;
  };

  //gender points
  if (gender === "male") {
    points++;
  } else {
    points = points + 10;
  };

  return points;

};

var determineCeleb = function(points) {
  if (points >= -12 && points < -6) {
    $("#barryo").show();
  } else if (points >= -6 && points < 0) {
    $("#beyonce").show();
  } else if (points >= 0 && points < 6) {
    $("#miley").show();
  } else if (points >= 6 && points < 12) {
    $("#malkin").show();
  } else if (points >= 12 && points < 18) {
    $("#madonna").show();
  } else {
    $("#gates").show();
  }
};
