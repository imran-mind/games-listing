import React, { useState, useEffect } from "react";
import gamesList from "../data/games.json";
export const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(gamesList);
    console.log("---> games ", gamesList);
  }, []);
  return (
    <div>
      <table id="customers">
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
      </table>
    </div>
  );
};
