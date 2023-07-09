import react from "react";

function Score(props) {
  return (
    <div className="top">
      <div className="scoreboard">
        <div className="score">Score:{props.score}</div>
        <div className="bestScore">Best Score:{props.bestScore}</div>
      </div>
    </div>
  );
}

export default Score;
