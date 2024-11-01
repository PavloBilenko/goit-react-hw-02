import { useState, useEffect } from "react";
import "./App.css";
import "modern-normalize";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

// console.log(profileData);

function App() {
  const [voteData, setVoteData] = useState(() => {
    const savedData = localStorage.getItem("voteData");
    return savedData ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("voteData", JSON.stringify(voteData));
  }, [voteData]);

  const hasFeedback =
    voteData.good > 0 || voteData.neutral > 0 || voteData.bad > 0;

  return (
    <div>
      <Description />
      <Options voteData={voteData} setVoteData={setVoteData} />
      {hasFeedback && <Feedback voteData={voteData} />}
    </div>
  );
}

export default App;
