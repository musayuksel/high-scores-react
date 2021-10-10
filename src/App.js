import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./App.css";
import EachScoreTable from "./EachScoreTable";
import allCountryScores from "./scores";

let isAToZ = -1;
let buttonText = "A-Z";
function App() {
  const [orderList, setOrderList] = useState(allCountryScores);

  function changeOrder() {
    setOrderList(() =>
      [...allCountryScores].sort((a, b) => {
        return a.name.toUpperCase() < b.name.toUpperCase()
          ? isAToZ
          : -1 * isAToZ;
      })
    );
    isAToZ *= -1;
  }

  useEffect(() => (buttonText = isAToZ === -1 ? "A-Z" : "Z-A"));

  return (
    <div className="App">
      <section className="scoreContainer">
        <button className="orderList" onClick={changeOrder}>
          Sort: {buttonText}
        </button>
        <h2>High Scores per Country</h2>
        {orderList.map((country) => (
          <EachScoreTable key={country.name} country={country} />
        ))}
      </section>
    </div>
  );
}

export default App;
