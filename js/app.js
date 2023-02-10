'use strict';

let username = prompt ('what is your name?');
alert ('Hello '  +  username  + ' Welcome to my Site!');

let Boybands = prompt("Do I like Boybands?"); {
    if (Boybands === 'y' || Boybands === 'n'){
        alert ("Backstreet boys fan in the house")
     } else if (Boybands == 'yes' || Boybands == 'no')
        alert ("Backstreet boys fan in the house!");
    } 

let question2 = prompt ('Do you want ice cream?')
console.log (question2);
alert ('You said '+ question2)

if (question2 === 'yes'){
    prompt ('What kind of flavor?')
    alert ('That is an awesome choice!')
}

if (question2 === 'no'){
    prompt ('Are you kidding me!')
    alert ('I will serve you some to try')
}

let question3 = prompt ('Do you like walnuts on your ice cream?').toUpperCase();
console.log (question3);
alert ('You said '+ question3)

if (question3 === 'YES'){
    alert ('Me too, I love walnuts!')
}

if (question3 === 'NO'){
    alert ('I think you should try it!')
}

let question4 = prompt ('Do you like brownies with ice cream').toLowerCase();
console.log (question4);
alert ('You said '+ question4)

if (question4 === 'yes'){
    alert ('It is the best mix right!')
}

if (question4 === 'no') {
    alert (' That is okay, not all people do')
}

let question5 = prompt ('Do you like Oatly ice cream?');
console.log (question5);
alert ('You said '+ question5)

if (question5 === 'yes'){
    alert (' Me too, but it is expensive!')
}

if (question5 === 'no'){
    alert (' It is fine, Oatly is a new trend')
}