import { useEffect, useState } from "react";
import React from "react";

function Questions() {
  const [questionCounter, setQuestionCounter] = useState(0);
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(false);
  const [optionThree, setOptionThree] = useState(false);

  const questions = [
    {
      question: "Fråga 0",
      option1: "Leif",
      option2: "Karin",
      option3: "Gunnar",
    },
    {
      question: "Fråga 1",
      option1: "12",
      option2: "13",
      option3: "14",
    },
    {
      question: "Fråga 2",
      option1: "Mörkt",
      option2: "Ljust",
      option3: "Ginger",
    },
    {
      question: "Fråga 3",
      option1: "Fido",
      option2: "Pluto",
      option3: "Vovve",
    },
  ];
  const question = questions[questionCounter];
  let answerMatrix;

  useEffect(() => {
    answerMatrix = { optionOne, optionTwo, optionThree, question };
  }, [optionOne, optionTwo, optionThree]);

  const optionOneChecked = (event) => {
    if (event.target.checked) {
      setOptionOne(true);
    } else if (!event.target.checked) {
      setOptionOne(false);
    }
  };
  const optionTwoChecked = (event) => {
    if (event.target.checked) {
      setOptionTwo(true);
    } else if (!event.target.checked) {
      setOptionTwo(false);
    }
  };
  const optionThreeChecked = (event) => {
    if (event.target.checked) {
      setOptionThree(true);
    } else if (!event.target.checked) {
      setOptionThree(false);
    }
  };

  const setAndGetPreviousAnswers = (event, button) => {
     localStorage.setItem(
       `answers${questionCounter}`,
       JSON.stringify(answerMatrix)
     );
    let modQuestionCounter;

    if (button === "previousQ") {
      modQuestionCounter = questionCounter - 1;
    } else if (button === "nextQ") {
      modQuestionCounter = questionCounter + 1;
    }
    setQuestionCounter(modQuestionCounter);
    let previousMatrix = localStorage.getItem(`answers${modQuestionCounter}`);

    const parsedPreviousMatrix = JSON.parse(previousMatrix);
    if (previousMatrix === null) {
      setOptionOne(false);
      setOptionTwo(false);
      setOptionThree(false);
    } else {
      setOptionOne(parsedPreviousMatrix.optionOne);
      setOptionTwo(parsedPreviousMatrix.optionTwo);
      setOptionThree(parsedPreviousMatrix.optionThree);
    }
  };

  

  return (
    <>
      <p>{question.question}</p>
      <label>
        <input
          type="checkbox"
          onChange={optionOneChecked}
          checked={optionOne}
        />
        {question.option1}
      </label>
      <label>
        <input
          type="checkbox"
          onChange={optionTwoChecked}
          checked={optionTwo}
        />
        {question.option2}
      </label>
      <label>
        <input
          type="checkbox"
          onChange={optionThreeChecked}
          checked={optionThree}
        />
        {question.option3}
      </label>

      <button onClick={(e) => setAndGetPreviousAnswers(e, "previousQ")}>
        previous quest
      </button>
      <button onClick={(e) => setAndGetPreviousAnswers(e, "nextQ")}>next quest</button>
    </>
  );
}

export default Questions;
