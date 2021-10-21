import React from "react";

export default function WorldWideScores({
  allCountryScores,
}) {
  const allScores = [];
  allCountryScores.forEach(({ scores }) =>
    scores.forEach((score) => allScores.push(score))
  );
  allScores.sort((a, b) => b.s - a.s);
  const countryPersons = allScores.map((person, i) => {
    return (
      <tr key={`person${i}`}>
        <th>{person.n}</th>
        <td>{person.s}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">WORLD WIDE HIGH SCORES</th>
        </tr>
      </thead>
      <tbody>{countryPersons}</tbody>
    </table>
  );
}
