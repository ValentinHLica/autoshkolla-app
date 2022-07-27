import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ExamOptions } from "@interface/utils";

import { Button, Checkbox } from "@ui";
import { ClipboardIcon, ClipboardInIcon, ClipboardListIcon } from "@icon";

import styles from "@styles/pages/home.module.scss";

const HomePage: React.FC = () => {
  const [examType, setExamType] = useState<ExamOptions>("normal");

  const options: {
    text: string;
    type: ExamOptions;
    icon: JSX.Element;
  }[] = [
    {
      text: "Test i zgjidhur",
      type: "solved",
      icon: <ClipboardListIcon />,
    },
    {
      text: "Test me ndihme",
      type: "help",
      icon: <ClipboardInIcon />,
    },
    {
      text: "Test normal",
      type: "normal",
      icon: <ClipboardIcon />,
    },
  ];

  return (
    <div className={styles.home}>
      <img src="/images/illustrations/landing.svg" alt="Intro" />

      <ul className={styles.options}>
        {options.map((options, index) => {
          const { text, type, icon } = options;

          return (
            <li onClick={() => setExamType(type)} key={index}>
              <Checkbox checked={!!(examType && examType === type)} />

              {icon}

              <p>{text}</p>
            </li>
          );
        })}
      </ul>

      <Link to={`/exam/${examType}`}>
        <Button size="xl">Fillo Provimin</Button>
      </Link>
    </div>
  );
};

export default HomePage;
