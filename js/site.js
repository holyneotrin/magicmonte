// authors:  Emma Alexander, Ignacio Alonso, JC Del Carmen, Akif Khaled, and Trinity Phan-Low
// date: 10.26.2021
// public domain
// this is a change

// random value JS array is from -> https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
const answers = [
  "I am otterly shore!",
  "Yes, you're not like the otters!",
  "The way I sea it, I'm otterly certain.",
  "My kelp beds point to yes.",
  "Outlook is otterly good.",
  "Shell yeah!",
  "Yeah, buoy!",
  "Feeling fin-tastic about this!",
  "Outcome a-piers to be yes.",
  "The water is crystal clear.",
  "I sea this in your favor.",


  "I'm not sure, you've left me in otter disbelief.",
  "Ask again later, I otter know better.",
  "I'm otterly unsure.",
  "You otter have something better to do.",
  "Seek to sea more.",
  "I'm not shore.",
  "I don't know, I'm sick of this ship.",


  "That's otter nonsense.",
  "No, get otter here.",
  "You otter not count on it.",
  "Nah, you otter get some b*tches.",
  "Don't get tide down.",
  "Nah, sea you later.",
  "No, are you squidding me?",
  "This is a fantasea, be realistic.",


];

const random = Math.floor(Math.random() * answers.length);
console.log(random, answers[random]);

var myButton = document.getElementById("submit");
myButton.addEventListener("click",function(){
  var question = document.getElementById("input").value;
  var answer = answers[random];
//displays output
   document.getElementById("output").innerHTML = answer;
   document.getElementById("submit").style.display = "none";
   document.getElementById("reload").style.display = "inline";
})
