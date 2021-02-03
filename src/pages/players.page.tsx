import { useState } from "react";
import { fetchPlayerData } from "../services/api.service";

export const PlayersPage = () => {
  const [players, setPlayers] = useState<App.PlayerCharacter[]>([]);
  const [loading, setLoading] = useState(false);

  const setPlayerData = async () => {
    setLoading(true);
    const mace = await fetchPlayerData(35131586);
    const nilorin = await fetchPlayerData(42520535);
    const seebo = await fetchPlayerData(34889652);
    const skaxes = await fetchPlayerData(35105120);
    setPlayers([mace, nilorin, seebo, skaxes]);
    setLoading(false);
  };

  return (
    <div style={{ marginTop: "10%" }}>
      <button
        onClick={(click) => {
          click.preventDefault();
          setPlayerData();
        }}
        style={{ marginBottom: "5%" }}
      >
        Get Player Data
      </button>
      {loading ? (
        <h2>LOADING</h2>
      ) : (
        players.map((player, index) => {
          return <div key={index} style={{ marginTop: "1" }}>{player.name}</div>;
        })
      )}
    </div>
  );
};
