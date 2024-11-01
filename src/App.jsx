import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "modern-normalize";
import profileData from "../src/assets/userData.json";
import Profile from "./components/Profile/Profile";
import FriendsData from "./assets/friends.json";
import FriendList from "./components/FriendList/FriendList";
import TransactionData from "./assets/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";


console.log(profileData);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Profile user={profileData} />
      <FriendList friends={FriendsData} />
      <TransactionHistory transactions={TransactionData} />
    </div>
  );
}

export default App;
