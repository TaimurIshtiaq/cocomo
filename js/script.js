var results = $(".result");
var effortsInStaffMonths = results[0];
var TimeForDevelopment = results[1];
var AverageStaffSize = results[2];
var productivity = results[3];

var DevelopmentMode = $("#devMode").val();
var LinesOfCode = $("#numOfLines").val();

function handleChange() {
  DevelopmentMode = $("#devMode").val();
  LinesOfCode = $("#numOfLines").val();
  if (LinesOfCode === "") LinesOfCode = 0;
  calculator(DevelopmentMode, LinesOfCode);
}

function calculator(x, y) {
  if (y < 0) return;
  console.log(x);
  console.log(y);
  var a, b, d;
  var c = 2.5;

  switch (x) {
    case "1":
      a = 2.4;
      b = 1.05;
      d = 0.38;
      break;
    case "2":
      a = 3.0;
      b = 1.12;
      d = 0.35;
      break;
    case "3":
      a = 3.6;
      b = 1.2;
      d = 0.32;
      break;
    default:
      break;
  }

  let effort = a * y ** b;
  $(effortsInStaffMonths).text(Math.round(effort * 100) / 100 + "");

  let tdev = c * effort ** d;
  $(TimeForDevelopment).text(Math.round(tdev * 100) / 100 + "");

  let ss = effort / tdev;
  $(AverageStaffSize).text(Math.round(ss * 100) / 100 + "");

  let p = (y * 1000) / effort;
  $(productivity).text(Math.round(p * 100) / 100 + "");
}
