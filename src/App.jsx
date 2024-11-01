import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "modern-normalize";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

// console.log(profileData);

function App() {
  const [voteData, setVoteData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div>
      <Description />
      <Options voteData={voteData} setVoteData={setVoteData} />
      <Feedback voteData={voteData} />
    </div>
  );
}

export default App;
