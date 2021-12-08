// authors:  Emma Alexander, JC Del Carmen, Akif Khaled, and Trinity Phan-Low
// date: 10.26.2021
// public domain
// this is a change

// lists of possible responses
// 0 = neutral response, 1 = positive response, -1 = negative resp
responses = [
{"text":"I am otterly shore!", "mood": 1},
{"text":"Yes, you're not like the otters!", "mood":1},
{"text":"The way I sea it, I'm otterly certain.","mood": 1},
{"text":"My kelp beds point to yes.", "mood":1},
{"text":"Outlook is otterly good.","mood":1},
{"text":"Shell yeah!","mood":1},
{"text":"Yeah, buoy!","mood": 1},
{"text":"Feeling fin-tastic about this!", "mood":1},
{"text":"Outcome a-piers to be yes.", "mood":1},
{"text": "The water is crystal clear." , "mood":1},
{"text":"I sea this in your favor.","mood":1},
{"text":"I'm not sure, you've left me in otter disbelief.", "mood":0},
{"text":"Ask again later, I otter know better.", "mood":0},
{"text":"I'm otterly unsure.", "mood":0},
{"text":"You otter have something better to do.", "mood":0},
{"text":"Seek to sea more.","mood":0},
{"text":"I'm not shore.","mood":0},
{"text":"I don't know, I'm sick of this ship.","mood":0},
{"text":"That's otter nonsense.","mood":-1},
{"text":"No, get otter here.","mood":-1},
{"text":"You otter not count on it.","mood":-1},
{"text":"Nah, you otter get some b*tches.","mood":-1},
{"text":"Don't get tide down.","mood":-1},
{"text":"Nah, sea you later.", "mood":-1},
{"text":"No, are you squidding me?", "mood":-1},
{"text":"This is a fantasea, be realistic.", "mood":-1},
];

index = Math.round(Math.random()*responses.length)
output = responses[index];
$("#submit").click(function(){
    $("#reload").animate({
      height: 'show'
    });
    $("#submit").hide();

  $("#output").html(output.text);

})


// const random = Math.floor(Math.random() * answers.length);
// console.log(random, answers[random]);
//
// var myButton = document.getElementById("submit");
// myButton.addEventListener("click",function(){
//   var question = document.getElementById("input").value;
//   var answer = answers[random];
// //displays output
//    document.getElementById("output").innerHTML = answer;
//    document.getElementById("submit").style.display = "none";
//    document.getElementById("reload").style.display = "inline";
// })

//hash
//https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
//hashCode = function(s){
  //return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
//}
