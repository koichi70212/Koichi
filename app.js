const quiz = [
  {
    question: 'Kさんの愛称は次のうちどれ？',
    answers: [
      'ゆうきーん',
      'ゆうまん',
      'ゆうじーん',
      'ゆうりーん'
    ],
    correct: 'ゆうじーん'
  }, {
    question: 'Kさんの身長は次のうちどれ？',
    answers: [
      '161cm',
      '162cm',
      '163cm',
      '168cm'
    ],
    correct: '168cm'
  }, {
    question: 'Kさんの年齢は次のうちどれ？',
    answers: [
      '10歳',
      '22歳',
      '34歳',
      '59歳'
    ],
    correct: '22歳'
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }

}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }
  
  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert('終了!!あなたの正解数は' + score + '/' + quizLength + 'です！');
  }

};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

















