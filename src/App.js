import React from "react";
import "./styles.css";
import { GameList } from "./components/game-list";
export default function App() {
  return (
    <div className="App">
      <h1>Top Games</h1>
      <GameList />
    </div>
  );
}
