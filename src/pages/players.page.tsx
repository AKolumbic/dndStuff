/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
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
  const [showData, setShowData] = useState(false);

  const resetPlayerData = (
    click?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    click && click.preventDefault();
    setSelectedPlayerCharacter({} as App.PlayerCharacter);
    setPlayers(cache);
    setShowData(false);
  };

  const showPlayerData = (
    player: App.PlayerCharacter,
    click?: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    click && click.preventDefault();
    setPlayers([]);
    setSelectedPlayerCharacter(player);
    setShowData(true);
  };

  useEffect(() => {
    async function onMount() {
      if (cache.length === 4) {
        resetPlayerData();
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
    }

    onMount();
  }, [cache]);

  return (
    <>
      <button
        hidden={players.length === 4 || loading}
        onClick={(click) => {
          resetPlayerData(click);
        }}
        style={{ marginBottom: "5%" }}
      >
        Show All Characters
      </button>
      {loading ? (
        <h2>LOADING</h2>
      ) : (
        players.map((player, index) => {
          return (
            <div
              key={index}
              onClick={(click) => {
                showPlayerData(player, click);
              }}
            >
              {player.name}
            </div>
          );
        })
      )}
      <Player character={selectedPlayerCharacter} render={showData} />
    </>
  );
};
