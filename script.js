const questions = [
  { q:"What does HTML stand for?",
    options:["Hyper Text Markup Language","High Text Machine Language","Hyper Tool","None"],
    answer:0 },
  { q:"Which language is used for styling web pages?",
    options:["HTML","CSS","JavaScript","Python"],
    answer:1 },
  { q:"Which language adds interactivity to websites?",
    options:["HTML","CSS","Java","JavaScript"],
    answer:3 },
  { q:"Which HTML tag is used for the largest heading?",
    options:["<h6>","<h1>","<head>","<title>"],
    answer:1 },
  { q:"Which CSS property changes text color?",
    options:["text-color","font-color","color","background"],
    answer:2 },
  { q:"Which keyword declares a variable in JavaScript?",
    options:["int","float","var","string"],
    answer:2 },
  { q:"Which tag is used to take user input?",
    options:["<form>","<input>","<label>","<p>"],
    answer:1 },
  { q:"Which CSS property makes rounded corners?",
    options:["border","box-shadow","border-radius","outline"],
    answer:2 },
  { q:"JavaScript is a ______ language.",
    options:["Markup","Programming","Styling","Database"],
    answer:1 },
  { q:"Correct HTML file extension is?",
    options:[".ht",".html",".web",".css"],
    answer:1 }
];

let index = 0;
let score = 0;

function startQuiz(){
  start.classList.add("hide");
  quiz.classList.remove("hide");
  loadQuestion();
}

function loadQuestion(){
  qno.innerText = `Question ${index+1} of ${questions.length}`;
  question.innerText = questions[index].q;
  options.innerHTML = "";

  questions[index].options.forEach((opt,i)=>{
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = ()=>checkAnswer(i);
    options.appendChild(btn);
  });

  nextBtn.classList.add("hide");
}

function checkAnswer(selected){
  if(selected === questions[index].answer){
    score++;
  }
  nextBtn.classList.remove("hide");
}

function nextQuestion(){
  index++;
  if(index < questions.length){
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult(){
  quiz.classList.add("hide");
  result.classList.remove("hide");

  userinfo.innerText =
    `Name: ${name.value} | Branch: ${branch.value} | Reg No: ${reg.value}`;

  scoreElem = document.getElementById("score");
  scoreElem.innerText = `${score} / ${questions.length}`;
}
