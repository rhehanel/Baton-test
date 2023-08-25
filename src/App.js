import React, { useState, useEffect } from "react";
import "./styles.css";
import RandomBaloon from "./components/baloons/RandomBaloon";
import Clouds from "./components/Clouds";
import House from "./assets/house.png"
import HeartBaloon from "./components/baloons/HeartBaloon";
import Ribbons from "./components/Ribbons";

function App() {
  const [baloons, setBaloons] = useState([]);
  const amount = 200;

  useEffect(()=>{
    const baloonSetup = [...Array(amount)].map((_, i) => <RandomBaloon key={i}/>)
    setBaloons(baloonSetup);
  }, []);

  const addBaloon = () => {
    setBaloons(baloons.concat(<RandomBaloon key={baloons.length} />));
    console.log(baloons.length);
  }

  return (
    <div className="App">
      <div className="background">
        <Clouds/>
        <Ribbons/>
      </div>
      <div className="elements">
        <div className="baloons">
          {baloons}
        </div>
        <div className="heartBaloon">
          <HeartBaloon/>
          <span>~70%<br/>SALE</span>
        </div>
        <div className="house" onClick={addBaloon}>
          <img src={House} alt="house"/>
        </div>
      </div>
    </div>
  );
}

export default App;