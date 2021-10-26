// authors:  Emma Alexander, Ignacio Alonso, JC Del Carmen, Akif Khaled, and Trinity Phan-Low
// date: 10.26.2021
// public domain

// return answers
// depending on length mod of 8

function answerMonte(str) {
	len = str.length;
  mod = len % 3;
  if (mod == 0) {
  	return "Good outcome 1"
  }
  else if (mod == 2) {
  return "Bad outcome 1"
  }
  else if (mod == 3) {
  return "Neutral outcome 1"
  }
}

// click event
var myButton = document.getElementById("submit");
myButton.addEventListener("click",function(){
  var question = document.getElementById("input").value;
  var answer = answerMonte(name);
  //displays output
  newText = "<h3>Monte says: " + answer + ".</h3>";
  document.getElementById("output").innerHTML = newText;
  document.getElementById("answer").innerHTML = answer;
})
