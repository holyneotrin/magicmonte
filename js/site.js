// authors:  Emma Alexander, Ignacio Alonso, JC Del Carmen, Akif Khaled, and Trinity Phan-Low
// date: 10.26.2021
// public domain

// random value JS array is from -> https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
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
