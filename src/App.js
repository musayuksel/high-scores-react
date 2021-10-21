import { useState } from "react";
import "./App.css";
import EachScoreTable from "./EachScoreTable";
import allCountryScores from "./scores";
import WorldWideScores from "./WorldWideScores";

function App() {
  const [orderList, setOrderList] = useState(
    allCountryScores
  );
  const [alphabetOrder, setAlphabetOrder] = useState(-1);

  function changeOrder() {
    setOrderList(() =>
      [...orderList].sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return alphabetOrder;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1 * alphabetOrder;
        }
        return 0;
      })
    );
    setAlphabetOrder(alphabetOrder * -1);
  }

  return (
    <div className="App">
      <section className="scoreContainer">
        <button className="orderList" onClick={changeOrder}>
          Sort: {alphabetOrder === -1 ? "A-Z" : "Z-A"}
        </button>
        <h2>High Scores per Country</h2>
        {orderList.map((country) => (
          <EachScoreTable
            key={country.name}
            country={country}
          />
        ))}
      </section>
      <section className="scoreContainer">
        <h2>WORLD WIDE</h2>
        <WorldWideScores
          allCountryScores={allCountryScores}
        />
      </section>
    </div>
  );
}

export default App;
