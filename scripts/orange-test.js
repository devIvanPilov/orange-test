var questions = document.getElementsByClassName('question');
var answerText = document.getElementById('answer-text');

for (i=0; i < questions.length; i++){
  questions[i].addEventListener('click', checkAnswer)
};


function checkAnswer(){
  if (this.hasAttribute ('id')){
    answerText.innerHTML = 'Correct!';
    answerText.style.color = 'green';
  } else {
    answerText.innerHTML = 'Wrong!';
    answerText.style.color = 'red';
  }
}
