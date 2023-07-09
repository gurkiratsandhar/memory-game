import react from "react";
import AllImages from "./Allimages";
import uniqid from "uniqid";

function Cards(props) {
  var randomArray = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  let num = [];
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * randomArray.length);
    let random = randomArray[index];
    num.push(random);
    randomArray.splice(index, 1);
  }
  //console.log(num);

  return (
    <div className="ImgContainer">
      {num.map((nu) => {
        return (
          <img
            alt={nu}
            key={uniqid()}
            className="img"
            src={AllImages[nu]}
            onClick={props.click}
          ></img>
        );
      })}
    </div>
  );
}

export default Cards;
