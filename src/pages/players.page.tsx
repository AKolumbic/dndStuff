import { useState } from "react";
import { Player } from "../components/player.component";
import { fetchPlayerData } from "../services/api.service";

export const PlayersPage = () => {
  const [players, setPlayers] = useState<App.PlayerCharacter[]>([]);
  const [cache, setCache] = useState<App.PlayerCharacter[]>([]);
  const [loading, setLoading] = useState(false);
  const [
    selectedPlayerCharacter,
    setSelectedPlayerCharacter,
  ] = useState<App.PlayerCharacter>({} as App.PlayerCharacter);

  const setPlayerData = async () => {
    if (cache.length === 4) {
      setSelectedPlayerCharacter({} as App.PlayerCharacter);
      setPlayers(cache);
      return;
    }
    setLoading(true);
    const mace = await fetchPlayerData(35131586);
    const nilorin = await fetchPlayerData(42520535);
    const seebo = await fetchPlayerData(34889652);
    const skaxes = await fetchPlayerData(35105120);
    setCache([mace, nilorin, seebo, skaxes]);
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
          return (
            <div
              key={index}
              style={{ marginTop: "1%" }}
              onClick={(click) => {
                click.preventDefault();
                setSelectedPlayerCharacter(player);
                setPlayers([]);
              }}
            >
              {player.name}
            </div>
          );
        })
      )}
      <Player character={selectedPlayerCharacter} />
    </div>
  );
};
