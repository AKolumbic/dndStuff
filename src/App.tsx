import React from "react";
import "./App.css";
import { RollPage, APIPage, PlayersPage } from "./pages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PlayersPage />
        <RollPage />
        <APIPage />
      </header>
    </div>
  );
}

export default App;
