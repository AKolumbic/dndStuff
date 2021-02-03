export const Player = ({ character }: { character: App.PlayerCharacter }) => {
  console.log(character);
  return (
    <div>
      <h1>{character.name}</h1>
      {character.actions?.class.map((action, index) => {
        return (
          <div key={index}>
            <h5>{action.name}</h5>
            <p>{action.snippet}</p>
          </div>
        );
      })}
    </div>
  );
};
