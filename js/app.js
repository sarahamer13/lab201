'use strict';

let username = prompt ('what is your name?');
alert ('Hello '  +  username  + ' Welcome to my Site!');

// let Boybands = prompt ("Do I like Boybands?").toLowerCase();
//     if (Boybands === 'y' || Boybands === 'yes'){
//         alert ("Backstreet boys fan in the house")
//      } else if (Boybands === 'n' || Boybands === 'no')
//         alert ("Boybands are here to stay!");
let score = 0;

function boybands() {
  let input = prompt ('Do I like Boybands?').toLowerCase();
  console.log(input);
  switch (input) {
  case 'y':
  case 'yes':
    alert ('You\'re correct!');
    score++;
    console.log('current score ---->', score);
    // console.log(Boybands);
    break;

  case 'n':
  case 'no':
    alert ('You are wrong');
    break;
  default:
    alert ('Try again');

  }
}
boybands();

// let question2 = prompt ('Do I like Westlife band?').toLowerCase();
// if (question2 === 'y' || question2 === 'yes'){
//     alert ('You are right, I love Westlife')
//  } else if (question2 === 'n' || question2 === 'no')
//     alert ('You are wrong, it is my favorite band!');

// console.log (question2);
// alert ('You said '+ question2)

function askband() {
  let message = prompt('Do I like Westlife band?');
  if (message === 'yes' || message === 'y'){
    document.write('You are correct');
    score++;
    console.log('current score ---->', score);
  } else if (message === 'no' || message === 'n') {
    document.write('You are wrong, it is my favorite band!');
  } else {
    document.write('Please answer yes or no');
  }
  console.log(message);
}
askband();


let question3 = prompt ('Did I go to Ireland').toLowerCase();
    if (question3 === 'y' || question3 === 'yes'){
        alert ('You are right!')
     } else if (question3 === 'n' || question3 === 'no')
        alert ('You are wrong! I went last year');
    
console.log (question3);
alert ('You said '+ question3)

let question4 = prompt ('Do you like walnuts on your ice cream?').toLowerCase();
    if (question4 === 'y' || question4 === 'yes'){
        alert ('Me too, I love walnuts!')
     } else if (question4 === 'n' || question4 === 'no')
        alert ('Are you kidding me!');

 console.log (question4);

 let question5 = prompt ('Do you like Oatly ice cream?').toLowerCase();
 if (question5 === 'y' || question5 === 'yes'){
     alert ('Me too, but it is expensive!')
  } else if (question5 === 'n' || question5 === 'no')
      alert ('It is okay, it is a new trend!')

console.log (question5);

// let score = 0

let question6 = [
    'How many countries have I lived in?'
];

let answers = [
    4
];

for (let i = 0; i < 4; i ++) {
    let response = prompt (question6[0]);
    response = parseInt(response)
    if (response === answers[0]) {
        alert ('You are correct');
        score++;
        console.log ('current score ---->', score);
        break;
    }
 else if (response === '1' || response === '2') {
    alert ('Your guess is way too low');
}

else if (response === '3') {
    alert ('Oh you are close');
}
}



let question7 = [
    'What is my favorite country to visit?'
];

let Answers = [
    'France',
    'Switzerland',
    'Monaco'
];

let guess = false;
for (let i = 0; i < 6; i++) {
    console.log ('i loop')
    if (guess === true) {
    console.log ('Guess is true, break i loop');
    break;
    }

let response = prompt (question7[0]);
response = response.toLocaleLowerCase();
for (let b = 0; b < Answers.length; b ++) {
    console.log ('B loop', b);
    if (response === Answers[b].toLowerCase()){
        alert ('You are correct');
        score++;
        console.log ('current score ---->', score);
        guess = true;
        break;
    }
    else {
        console.log(Answers[b] + 'is wrong');
    }
}

if (guess === false) {
    alert ('Hint: Country where they speak French');
}
}

alert ('Correct answers were France, Switzerland, and Monaco');

alert ('You scored' + score +' out of 2');
