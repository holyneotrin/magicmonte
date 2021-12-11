// authors:  Emma Alexander, JC Del Carmen, Akif Khaled, and Trinity Phan-Low
// date: 10.26.2021
// public domain


// lists of possible responses
// 0 = neutral response, 1 = positive response, -1 = negative resp
responses = [
  //pos
  {"text":"I am otterly shore!",
  "mood": 1, "audio": "youve-been-informed-345.mp3"},
  {"text":"Yes, you're not like the otters!",
  "mood":1,"audio": "youve-been-informed-345.mp3"},
  {"text":"The way I sea it, I'm otterly certain.",
  "mood": 1,"audio": "youve-been-informed-345.mp3"},
  {"text":"My kelp beds point to yes.",
  "mood":1,"audio": "youve-been-informed-345.mp3"},
  {"text":"Outlook is otterly good.",
  "mood":1,"audio": "youve-been-informed-345.mp3"},
  {"text":"Shell yeah!",
  "mood":1,"audio": "youve-been-informed-345.mp3"},
  {"text":"Yeah, buoy!",
  "mood": 1,"audio": "youve-been-informed-345.mp3"},
  {"text":"Feeling fin-tastic about this!",
  "mood":1,"audio": "youve-been-informed-345.mp3"},
  {"text":"Outcome a-piers to be yes.",
  "mood":1,"audio": "youve-been-informed-345.mp3"},
  {"text": "The water is crystal clear.",
  "mood":1,"audio": "youve-been-informed-345.mp3"},
  {"text":"I sea this in your favor.",
  "mood":1,"audio": "youve-been-informed-345.mp3"},
  //neutral
  {"text":"I'm not sure, you've left me in otter disbelief.",
  "mood":0,"audio": "not-bad-549.mp3"},
  {"text":"Ask again later, I otter know better.",
  "mood":0,"audio": "not-bad-549.mp3"},
  {"text":"I'm otterly unsure.",
  "mood":0,"audio": "not-bad-549.mp3"},
  {"text":"You otter have something better to do.",
  "mood":0,"audio": "not-bad-549.mp3"},
  {"text":"Seek to sea more.",
  "mood":0,"audio": "not-bad-549.mp3"},
  {"text":"I'm not shore.",
  "mood":0,"audio": "not-bad-549.mp3"},
  {"text":"I don't know, I'm sick of this ship.",
  "mood":0,"audio": "not-bad-549.mp3"},
  //bad
  {"text":"That's otter nonsense.",
  "mood":-1,"audio": "dont-think-so-556.mp3"},
  {"text":"No, get otter here.",
  "mood":-1,"audio": "dont-think-so-556.mp3"},
  {"text":"You otter not count on it.",
  "mood":-1,"audio": "dont-think-so-556.mp3"},
  {"text":"Nah, you otter get some b*tches.",
  "mood":-1,"audio": "dont-think-so-556.mp3"},
  {"text":"Don't get tide down.",
  "mood":-1,"audio": "dont-think-so-556.mp3"},
  {"text":"Nah, sea you later.",
  "mood":-1,"audio": "dont-think-so-556.mp3"},
  {"text":"No, are you squidding me?",
  "mood":-1,"audio": "dont-think-so-556.mp3"},
  {"text":"This is a fantasea, be realistic.",
  "mood":-1,"audio": "dont-think-so-556.mp3"},
];

// randomizes responses
index = Math.round(Math.random()*responses.length)
output = responses[index];

//button click to output response
$("#submit").click(function(){
  $("#reload").animate({
    height: 'show'
  });
  $("#submit").hide();

  //output
  $("#output").html(output.text);
  if (output.mood == 1) {
    var posDing = document.getElementById("positive");
    posDing.play();
  }
  if (output.mood == 0) {
    var neuDing = document.getElementById("neutral");
    neuDing.play();
  }
  else if (output.mood == -1) {
    var badDing = document.getElementById("bad");
    badDing.play();
  }})

  var spongebob = document.getElementById("audio");
  function playAudio() {
    spongebob.play();
  }
  function pauseAudio() {
    spongebob.pause();
  }
