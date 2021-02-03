import {
  // RollPage,
  APIPage,
  PlayersPage,
} from "./index";

export const DevPage = () => {
  return (
    <div style={{ position: "absolute", top: 0 }}>
      <h5>Mists of Dethvale Player Characters</h5>
      <PlayersPage />
      <div style={{ marginTop: '10%' }} />
      <APIPage />
    </div>
  );
};
