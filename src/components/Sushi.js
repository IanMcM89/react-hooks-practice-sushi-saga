import React, {useState} from "react";

function Sushi({sushiRoll, remainingBalance, onPlateChange, onBalanceChange}) {
  const [isEaten, setIsEaten] = useState(false);

  function handlePlateClick() {
    if (remainingBalance > sushiRoll.price) {
      setIsEaten(!isEaten);
      onBalanceChange(sushiRoll);
      onPlateChange(sushiRoll);
    } else {
      alert('You don\'t have any money left!');
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handlePlateClick}>
        {isEaten ? null : (
          <img
            src={sushiRoll.img_url}
            alt={sushiRoll.name + " Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushiRoll.name} - ${sushiRoll.price}
      </h4>
    </div>
  );
}

export default Sushi;
