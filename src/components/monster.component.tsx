export const Monster = ({ monster }: { monster: App.Monster }) => {
  return (
    <>
      <h1 style={{ marginTop: '10%'}}>{monster.name}</h1>
      <div style={{ marginTop: '5%'}}>
        <label>Ability Scores: </label>
        <div>{`Strength: ${monster.strength}`}</div>
        <div>{`Dexterity: ${monster.dexterity}`}</div>
        <div>{`Constitution: ${monster.constitution}`}</div>
        <div>{`Intelligence: ${monster.intelligence}`}</div>
        <div>{`Wisdom: ${monster.wisdom}`}</div>
        <div>{`Charisma: ${monster.charisma}`}</div>
        <div style={{ marginTop: "10%" }} />
        <div>{`Hit Points: ${monster.hit_points}`}</div>
        <div>{`Challenge Rating: ${monster.challenge_rating}`}</div>
        <div>{`Size: ${monster.size}`}</div>
        <div>{`Type: ${monster.type}`}</div>
      </div>
    </>
  );
};
