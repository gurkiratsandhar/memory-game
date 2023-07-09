import "./App.css";
import Cards from "./component/Cards";
import { useState, useRef } from "react";
import Score from "./component/Score";

function App() {
  const [data, setdata] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setbestScore] = useState(0);
  const ref = useRef();

  const onclick = (e) => {
    let booleanValue = data.some((item) =>
      item == e.target.alt ? true : false
    );
    if (booleanValue == false) {
      setdata((prevState) => [...prevState, e.target.alt]);
      console.log(e.target.alt);
      //console.log("no match");
      setScore((prevState) => prevState + 1);
    } else {
      //console.log("game Over");
      setbestScore((prevState) => (prevState < score ? score : prevState));
      setScore(0);
      setdata([]);
    }
    //console.log(data);
  };

  return (
    <div>
      <Score score={score} bestScore={bestScore} />
      <Cards click={onclick} />;
    </div>
  );
}

export default App;
