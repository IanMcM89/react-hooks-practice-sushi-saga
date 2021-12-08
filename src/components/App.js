import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiArray, setSushiArray] = useState([]);
  const [remainingBalance, setRemainingBalance] = useState(100);
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(sushiData => setSushiArray(sushiData))
  }, []);

  function handleChangeBalance(sushiRoll) {
    remainingBalance > sushiRoll.price ? setRemainingBalance(remainingBalance => remainingBalance - sushiRoll.price) : setRemainingBalance(remainingBalance);
  }

  function handlePlates(sushiRoll) {
    remainingBalance > sushiRoll.price ? setPlates([...plates, sushiRoll]) : setPlates(plates);
  }

  return (
    <div className="app">
      <SushiContainer sushiArray={sushiArray} remainingBalance={remainingBalance} onPlateChange={handlePlates} onBalanceChange={handleChangeBalance}/>
      <Table remainingBalance={remainingBalance} plates={plates}/>
    </div>
  );
}

export default App;
