let score = 0;
let a, b;

function generateQuestion() {
  a = Math.floor(Math.random() * 10) + 1;  
  b = Math.floor(Math.random() * 10) + 1;  
  document.getElementById('question').textContent = `Сколько будет ${a} * ${b}?`;
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);
  if (userAnswer === a * b) {
    score++;
  } else {
    score--;
  }
  document.getElementById('score').textContent = `Количество баллов: ${score}`;
  document.getElementById('answer').value = '';
  generateQuestion();
}

generateQuestion();
