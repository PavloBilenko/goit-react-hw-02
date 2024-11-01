
import React from "react";
import s from "./Options.module.css";

const Options = ({ voteData, setVoteData }) => {
  const handleClickByOption = (value) => {
    setVoteData((prev) => ({
      ...prev,
      [value]: prev[value] + 1,
    }));
  };

  const handleReset = () => {
    setVoteData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        <li>
          <button
            onClick={() => handleClickByOption("good")}
            className={s.button}
          >
            Good
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClickByOption("neutral")}
            className={s.button}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClickByOption("bad")}
            className={s.button}
          >
            Bad
          </button>
        </li>
        <li>
          <button onClick={handleReset} className={s.button}>
            Reset
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Options;
