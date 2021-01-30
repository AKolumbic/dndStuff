import { ChangeEvent } from "react";

export const Dropdown = ({
  updateDiceValue,
}: {
  updateDiceValue: (value: App.DiceType) => void;
}) => {
  const dice: App.DiceType[] = [20, 4, 6, 8, 10, 12, 100];

  const handleSelect = (change: ChangeEvent<HTMLSelectElement>) => {
    updateDiceValue(Number(change.target.value) as App.DiceType);
  };

  return (
    <>
      <label htmlFor="dice">Select A Die: </label>
      <select name="dice" id="dice" onChange={(change) => handleSelect(change)}>
        {dice.map((die: App.DiceType) => (
          <option value={die} key={die}>
            {die}
          </option>
        ))}
      </select>
    </>
  );
};
