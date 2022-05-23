import React, { useState } from "react";

function App() {
  const [score, setScore] = useState("0");
  const [score2, setScore2] = useState("0");
  const [score3, setScore3] = useState("0");
  const [score4, setScore4] = useState("0");
  const [team, setTeam] = useState("");
  const [team2, setTeam2] = useState("");
  const [team3, setTeam3] = useState("");
  const [team4, setTeam4] = useState("");
  const [summary, setSummary] = useState(false);
  const [remove, setRemove] = useState(true);

  const country = [
    "brazil",
    "spain",
    "zim",
    "SA",
    "poland",
    "germany",
    "USA",
    "UK",
    "Canada"
  ];
  const country2 = [
    "Netherlands",
    "spain",
    "zim",
    "SA",
    "Malta",
    "germany",
    "USA",
    "UK",
    "Canada"
  ];
  const country3 = [
    "brazil",
    "Namibia",
    "zim",
    "SA",
    "England",
    "germany",
    "USA",
    "UK",
    "Canada"
  ];
  const country4 = [
    "Netherlands",
    "spain",
    "Romania",
    "SA",
    "poland",
    "germany",
    "USA",
    "UK",
    "Canada"
  ];

  function handleScore() {
    setScore(Math.floor(Math.random() * 8));
    setScore2(Math.floor(Math.random() * 6));
    setScore3(Math.floor(Math.random() * 4));
    setScore4(Math.floor(Math.random() * 2));
  }

  function handleTeam() {
    const randomitem = country[Math.floor(Math.random() * country.length)];
    setTeam(randomitem);
    const randomitem2 = country2[Math.floor(Math.random() * country.length)];
    setTeam2(randomitem2);
    const randomitem3 = country3[Math.floor(Math.random() * country.length)];
    setTeam3(randomitem3);
    const randomitem4 = country4[Math.floor(Math.random() * country.length)];
    setTeam4(randomitem4);
    setRemove(true);
    setScore("0");
    setScore2("0");
    setScore3("0");
    setScore4("0");
  }

  function handleDelete() {
    setRemove(false);
  }

  function ShowAll() {
    setSummary(true);
    setTeam(team);
    setTeam2(team2);
    setScore(score);
    setScore2(score2);
    setTeam3(team3);
    setTeam4(team4);
    setScore3(score3);
    setScore4(score4);
  }

  return (
    <div className="container">
      {remove && (
        <h1>
          {team} {score} - {score2} {team2}
        </h1>
      )}
      {summary && (
        <h1>
          {team3} {score3} - {score4} {team4}
        </h1>
      )}
      <button onClick={handleTeam}>Start Game</button>
      <br />
      <br />
      <button onClick={handleScore}>Update Score</button>
      <br />
      <br />
      <button onClick={handleDelete}>Finish</button>
      <br />
      <br />
      <button onClick={ShowAll}>Summary</button>
    </div>
  );
}

export default App;
