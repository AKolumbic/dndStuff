import { useState, useEffect, ChangeEvent } from "react";
import { dice, APIs } from "../services/utils";

export const Dropdown = ({
  render,
  updateDiceValue,
  updateAPIType,
}: {
  render?: boolean;
  updateDiceValue?: (value: App.DiceType) => void;
  updateAPIType?: (api: App.API) => void;
}) => {
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    updateDiceValue && setOptions(dice);
    updateAPIType && setOptions(APIs);
  }, [updateDiceValue, updateAPIType]);

  const handleSelect = (change: ChangeEvent<HTMLSelectElement>) => {
    updateDiceValue &&
      updateDiceValue(Number(change.target.value) as App.DiceType);

    updateAPIType && updateAPIType(String(change.target.value) as App.API);
  };

  return (
    <>
      {render === false ? null : (
        <>
          <label htmlFor="dice">Select: </label>
          <select
            name="dice"
            id="dice"
            onChange={(change) => handleSelect(change)}
          >
            {options.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </select>
        </>
      )}
    </>
  );
};
