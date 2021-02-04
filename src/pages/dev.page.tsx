import {
  RollPage,
  APIPage,
  PlayersPage,
} from "./index";

export const DevPage = () => {
  return (
    <div style={{ position: "absolute", top: 0 }}>
      <RollPage />
      <h3>Mists of Dethvale</h3>
      <h4 style={{ marginTop: '-6%' }}>Player Characters: </h4>
      <PlayersPage />
      <div style={{ marginTop: '10%' }} />
      <APIPage />
    </div>
  );
};
