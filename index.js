const readlineSync = require('readline-sync');
const chalk = require('chalk');
var name = readlineSync.question("Enter you name \n");
console.log("Welcome to a QUIZ on IPL",name);
var score =0;
var level1Flag=0;
var level2Flag =0;
var level3Flag =0;

var highScore = [
    {
        userName: 'Vinay',
        score: 1
    },
    {
        userName: 'Mr.IPL',
        score: 1
    }
];

// Question
questions=[
  {
    question:"Who hit six fours in an over ?",
    options:["Rahane","Gambir","Rohit","Kohli"],
    answer:"Rahane"
  },
  {
    question:"Wankhede is the home of which IPL team ?",
    options:["Kolkata Knight Riders","Delhi Daredevils","Chennai Super Kings","Mumbai Indians"],
    answer:"Mumbai Indians"
  },
  {
    question:"Who is the captain of Mumbai Indians in IPL 2012 ?",
    options:["Rohith Sharma","Sachin","Harbhajan Singh","Kohli"],
    answer:"Harbhajan Singh"
  },
    {
    question:"Who won the Ma of the Match award in IPL 2008 final ?",
    options:["Yusuf Pathan","Dhoni","Shane Warne","Kohli"],
    answer:"Yusuf Pathan"
  },
    {
    question:"Which is the only IPL game in which the Super Over too ended in a tie? ?",
    options:[ "Sunrisers Hyderabad vs Kolkata Knight Riders, 2013 ",
    "Kolkata Knight Riders vs Rajasthan Royals, 2014",
    "Rajasthan Royals vs Kings XI Punjab, 2015"],
    answer:"Kolkata Knight Riders vs Rajasthan Royals, 2014"
  },
    {
    question:"In the 2014 edition of the IPL, where a part of the tournament was held in the UAE, which batsmen top scored in the Middle East country?",
    options:["Glenn Maxwell","Brendon McCullum","Dwayne Smith ","Kohli"],
    answer:"Glenn Maxwell"
  },
    {
    question:"In which season did Virat Kohli score more no of all his IPL centuries?",
    options:["IPL 2013","IPL 2014","IPL 2016","IPL 2018"],
    answer:"IPL 2016"
  },
    {
    question:"Against which team were the most centuries scored in IPL 2018?",
    options:["Mumbai Indians","Rajasthan Royals","Sunrisers Hyderabad","Chennai Super Kings"],
    answer:"Sunrisers Hyderabad"
  },
    {
    question:"How many ties have taken place in the 12 editions of the IPL ?",
    options:["7","8","9","10"],
    answer:"9"
  },
    {
    question:"Which Indian player has the fastest 100 in IPL?",
    options:["Yusuf Pathan","Virat Kohli","Virender Sehwag","Dhoni"],
    answer:"Yusuf Pathan"
  },
]

// Function to check answers
function answerCheck(question,options,answer){
  var index = readlineSync.keyInSelect(options, question,{cancel: null});
  if(answer.toUpperCase()===options[index].toUpperCase()){
    score=score+1
    console.log(chalk.green("You have choosen the right answer"));
    console.log("Your score is",score);
    console.log('==============================\n');
  }
  else{
    console.log(chalk.red("You have chosen the wrong option \n"));
    console.log(chalk.white.bold("right asnwer is",answer));
    console.log('==============================\n');
  }
}


//looping over questions
for (var i =0;i<questions.length;i++){
  var currentQuestion = questions[i];
  answerCheck(currentQuestion.question,currentQuestion.options,currentQuestion.answer);
  if(score==3 && level1Flag===0){
    level1Flag=1;
    console.log(chalk.blue.bold("You have reached level 1"))
  }
   if(score==5 && level2Flag===0){
    level2Flag=1;
    console.log(chalk.blue.bold("You have reached level 2"))
  }
   if(score==7 && level3Flag===0){
    level3Flag=1;
    console.log(chalk.blue.bold("You have reached level 3"))
  }
}

//
if( score === highScore[0].score) {
    highScore.unshift({name,score});
} else {
    highScore.push({name,score});
}

console.log(chalk.white.underline.bold("Thanks for completeing the quiz"));



