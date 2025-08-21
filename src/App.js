import { useState } from 'react';
import './App.css';
import Game from './Game';

function App() {

  function onClickVariant(index){
    setStep(step+1)
    if (questions[step].correct == index){
      setCorrect(correct+1)
    }
  }
  const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но c возможностью выполнять JS-код',
        ],
        correct: 2,
    },
  ];
  const [correct, setCorrect] = useState(0)
  const [step, setStep] = useState(0)
  const question = questions[step]
  if (questions.length !== step){
    return <Game question={question} step={step} questions_count={questions.length} onClickVariant={onClickVariant}/>
  }else{
    return <Game correct={correct} questions_count={questions.length}/>
  }
}

export default App;
