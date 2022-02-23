import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { QuestionList } from "@interface/utils";

import styles from "@styles/pages/results.module.scss";
import {
  CheckSolidIcon,
  ClockIcon,
  ImageIcon,
  QuestionMarkSolidIcon,
  RefreshIcon,
  XSolidIcon,
} from "@icon";
import { Button, Checkbox } from "@ui";

const Results: React.FC = () => {
  const {
    state: { questions, timeCounter },
  } = useLocation() as {
    state: { questions: QuestionList[]; timeCounter: number };
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (!questions || questions.length === 0) navigate("/");
    // eslint-disable-next-line
  }, []);

  const correctQuestions = questions.filter(
    (q) => q.userAnswer !== null && q.userAnswer === q.answer
  );

  const wrongQuestions = questions.filter(
    (q) => q.userAnswer !== null && q.userAnswer !== q.answer
  );

  const emptyQuestions = questions.filter((q) => q.userAnswer === null);

  const hasFailed = correctQuestions.length < questions.length - 5;

  return (
    <div className={styles.results}>
      <div
        className={`${styles.result} ${
          styles[`result__${hasFailed ? "failed" : "success"}`]
        }`}
      >
        <div className={styles.result__title}>
          <XSolidIcon />

          <h1>{hasFailed ? "Fatekeqesisht nuk kaloni!" : "Suksese kaluat!"}</h1>
        </div>

        <div className={styles.illustration}>
          <img
            src={`/illustrations/drawkit-transport-scene-${
              hasFailed ? 10 : 3
            }.svg`}
            alt="Illustration"
          />
        </div>

        <Button
          size="xl"
          color={hasFailed ? "red" : "green"}
          onClick={() => navigate(-1)}
        >
          <RefreshIcon />
          Provo Perseri
        </Button>
      </div>

      <div className={styles.questions__wrapper}>
        <ul className={styles.question__stats}>
          <li>
            <span>
              <strong>Ju Mbaruat Provimin ne:</strong> <ClockIcon />{" "}
              {40 - timeCounter} min
            </span>
          </li>
          <li>
            <span>
              <CheckSolidIcon />
              <strong>Pergjigje te Sakta: </strong>
              {correctQuestions.length}
            </span>
            <span>
              <XSolidIcon />
              <strong>Gabime: </strong>
              {wrongQuestions.length}
            </span>
            <span>
              <QuestionMarkSolidIcon />
              <strong>Mungojne: </strong>
              {emptyQuestions.length}
            </span>
          </li>
        </ul>

        <ul className={styles.questions}>
          {questions.map((question, index) => {
            const { text, image, answer, userAnswer } = question;

            let type: "correct" | "wrong" | "empty" =
              userAnswer === null
                ? "empty"
                : userAnswer === answer
                ? "correct"
                : "wrong";

            const icon = (() => {
              switch (type) {
                case "correct":
                  return <CheckSolidIcon />;

                case "wrong":
                  return <XSolidIcon />;

                case "empty":
                  return <QuestionMarkSolidIcon />;
              }
            })();

            return (
              <li
                className={`${styles.question} ${styles[`question__${type}`]}`}
                key={index}
              >
                <div>
                  <div className={styles.question__content}>
                    <div className={styles.image}>
                      {image ? (
                        <img src={`/images/${image}.png`} alt="Question" />
                      ) : (
                        <ImageIcon />
                      )}
                    </div>

                    <p>{text}</p>
                  </div>

                  <ul className={styles.question__vote}>
                    <li>
                      <Checkbox
                        checked={!!(userAnswer !== null && answer === true)}
                        id="correct"
                        disabled
                      />
                      <label htmlFor="correct">Sakte</label>
                    </li>

                    <li>
                      <Checkbox
                        checked={!!(userAnswer !== null && answer === false)}
                        id="wrong"
                        disabled
                      />
                      <label htmlFor="wrong">Gabim</label>
                    </li>
                  </ul>
                </div>

                <div className={styles.icon}>{icon}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Results;
