// authors:  Emma Alexander, Ignacio Alonso, JC Del Carmen, Akif Khaled, and Trinity Phan-Low
// date: 10.26.2021
// public domain

const answers = [
  "I am otterly sure!",
  "I'm not sure, you've left me in otter disbelief.",
  "That's otter nonsense.",
  "Yes, you're not like the otters!",
  "Ask again later, I otter know better.",
  "No, get otter here.",
  "The way I sea it, I'm otterly certain.",
  "I'm otterly unsure.",
  "You otter not count on it.",
  "My kelp beds point to yes.",
  "You otter have something better to do.",
  "Nah, you otter get some b*tches.",
  "Outlook is otterly good.",
];

const random = Math.floor(Math.random() * answers.length);
console.log(random, answers[random]);

var myButton = document.getElementById("submit");
myButton.addEventListener("click",function(){
  var question = document.getElementById("input").value;
  var answer = answers[random];
//displays output
   document.getElementById("output").innerHTML = answer;
})



// // return answers
// // depending on length mod of 12
//
// function answerMonte(str) {
// 	len = str.length;
//   mod = len % 13;
//   if (mod == 0) {
//   	return "I am otterly sure!"
//   }
//   else if (mod == 1) {
//   	return "I'm not sure, you've left me in otter disbelief."
//   }
//   else if (mod == 2) {
//   	return "That's otter nonsense."
//   }
// 	else if (mod == 3) {
// 	  return "Yes, you're not like the otters!"
//   }
//   else if (mod == 4) {
// 	  return "Ask again later, I otter know better."
//   }
// 	else if (mod == 5) {
// 		return "No, get otter here."
// 	}
// 	else if (mod == 6) {
// 		return "The way I sea it, I'm otterly certain."
// 	}
// 	else if (mod == 7) {
// 		return "I'm otterly unsure."
// 	}
// 	else if (mod == 8) {
// 		return "You otter not count on it."
// 	}
// 	else if (mod == 9) {
// 			return "My kelp beds point to yes."
// 	}
// 	else if (mod == 10) {
// 		return "You otter have something better to do."
// 	}
// 	else if (mod == 11) {
// 		return "Nah, you otter get some b*tches."
// 	}
// 	else if (mod == 12) {
// 		return "Outlook is otterly good."
// 	}
// }
//
//
// // click event
// var myButton = document.getElementById("submit");
// myButton.addEventListener("click",function(){
//   var question = document.getElementById("input").value;
//   var answer = answerMonte(name);
// //displays output
//   newText = "<h3>Monte says: " + answer + "</h3>";
//   document.getElementById("output").innerHTML = newText;
//   document.getElementById("answer").innerHTML = answer;
// })
