import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushiArray, remainingBalance, onPlateChange, onBalanceChange}) {
  const [index1, setindex1] = useState(0);
  const [index2, setindex2] = useState(4);

  function handleMoreButtonClick() {
    setindex1((index1) => index1+= 4);
    setindex2((index2) => index2+= 4);
  }

  const sushiToBeDisplayed = sushiArray.slice(index1, index2).map(sushiRoll => <Sushi key={sushiRoll.id} remainingBalance={remainingBalance} sushiRoll={sushiRoll} onPlateChange={onPlateChange} onBalanceChange={onBalanceChange}/>);

  return (
    <div className="belt">
      {sushiToBeDisplayed}
      <MoreButton onButtonClick={handleMoreButtonClick}/>
    </div>
  );
}

export default SushiContainer;
