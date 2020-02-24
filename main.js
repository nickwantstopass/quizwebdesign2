function check() {

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var correct = 0;

    if (question1 == "Air Jordan 1") {
  correct++;
}
    if (question2 == "Nike") {
  correct++;
}
    if (question3 == "Space Jam 11") {
  correct++;
}
  var messages = ["Good Job!","Okay...","Try a little harder!"]
  var pictures = ["img/win.gif","img/okay.gif","img/lose.gif"]

  var range;
    if (correct == 0) {
		range = 2;
}

	 if (correct > 0 && correct < 3) {
		range = 1;
}

	 if (correct == 3) {
		range = 0;
}

document.getElementById("messages").innerHTML = messages[range];
document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
document.getElementById("pictures").src = pictures[range]

}
