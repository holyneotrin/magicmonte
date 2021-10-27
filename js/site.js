// authors:  Emma Alexander, Ignacio Alonso, JC Del Carmen, Akif Khaled, and Trinity Phan-Low
// date: 10.26.2021
// public domain

// return answers
// depending on length mod of 12

function answerMonte(str) {
	len = str.length;
  mod = len % 12;
  if (mod == 0) {
  	return "I am otterly sure!"
  }
  else if (mod == 2) {
  return "I'm not sure, you've left me in otter disbelief."
  }
  else if (mod == 3) {
  return "That's otter nonsense."
  }
	else if (mod == 4) {
  return "Yes, you're not like the otters!"
  }
  else if (mod == 5) {
  return "Ask again later, I otter know better."
  }
	else if (mod == 6) {
	return "No, get otter here."
	}
	else if (mod == 7) {
	return "The way I sea it, I'm otterly certain.""
	}
	else if (mod == 8) {
	return "I'm otterly unsure."
	}
	else if (mod == 9) {
	return "You otter not count on it."
	}
	else if (mod == 10) {
	return "My kelp beds point to yes." or "Outlook is otterly good."
	}
	else if (mod == 11) {
	return "You otter have something better to do."
	}
	else if (mod == 12) {
	return "Nah, you otter get some b*tches."
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
