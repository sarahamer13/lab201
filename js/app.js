'use strict';

let username = prompt ('what is your name?');
alert ('Hello '  +  username  + ' Welcome to my Site!');

let Boybands = prompt ("Do I like Boybands?").toLowerCase();
    if (Boybands === 'y' || Boybands === 'yes'){
        alert ("Backstreet boys fan in the house")
     } else if (Boybands === 'n' || Boybands === 'no')
        alert ("Boybands are here to stay!");
    

let question2 = prompt ('Do I like Westlife band?').toLowerCase();
if (question2 === 'y' || question2 === 'yes'){
    alert ('You are right, I love Westlife')
 } else if (question2 === 'n' || question2 === 'no')
    alert ('You are wrong, it is my favorite band!');

console.log (question2);
alert ('You said '+ question2)

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
