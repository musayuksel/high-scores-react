export default function EachScoreTable({ country }) {
  country.scores.sort((a, b) => b.s - a.s);
  const countryPersons = country.scores.map((person, i) => {
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
          <th colSpan="2">HIGH SCORE: {country.name}</th>
        </tr>
      </thead>
      <tbody>{countryPersons}</tbody>
    </table>
  );
}
