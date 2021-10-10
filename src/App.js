import "./App.css";
import EachScoreTable from "./EachScoreTable";
import allCountryScores from "./scores";

function App() {
  allCountryScores.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  });
  return (
    <div className="App">
      <section className="scoreContainer">
        <h2>High Scores per Country</h2>
        {allCountryScores.map((country, i) => (
          <EachScoreTable key={i} country={country} />
        ))}
      </section>
    </div>
  );
}

export default App;
