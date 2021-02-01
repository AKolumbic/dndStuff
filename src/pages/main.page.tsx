import React, { useState } from "react";
import { Dropdown } from "../components/dropdown.component";
import { IncrementButton } from "../components/increment-button.component";
import { RollButton } from "../components/roll-button.component";

import { APIPage } from "../pages/api.page";

export const MainPage = () => {
  const [die, setDieType] = useState<App.DiceType>(20);
  const [modifier, setModifier] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [rollValue, setRollValue] = useState("");
  const [rollStyle, setRollStyle] = useState({ color: "white" });

  const hide = true;
  const updateDiceValue = (value: App.DiceType) => {
    setDieType(value);
  };
  const updateMultiplierValue = (value: number) => {
    setMultiplier(value);
  };
  const updateModifierValue = (value: number) => {
    setModifier(value);
  };

  const updateRoll = (value: string) => {
    value === '20'
      ? setRollStyle({ color: "green" })
      : value === '1'
      ? setRollStyle({ color: "red" })
      : setRollStyle({ color: "white" });
    setRollValue(value);
  };

  return (
    <div>
      <label>Roll The Dice: </label>
      {hide ? null : (
        <>
          <RollButton
            dice={{
              die: die,
              modifier: modifier,
              multiplier: multiplier,
            }}
            updateRoll={updateRoll}
          />
        </>
      )}

      <RollButton
        dice={{
          die: 20,
          modifier: 0,
          multiplier: 1,
        }}
        updateRoll={updateRoll}
      />
      <div style={rollStyle}>{rollValue}</div>

      <div style={{ marginTop: "25%" }}>
        <APIPage />
        {hide ? null : (
          <>
            <Dropdown updateDiceValue={updateDiceValue} />
            <IncrementButton
              updateValue={updateMultiplierValue}
              buttonType="Multiplier"
            />
            <IncrementButton
              updateValue={updateModifierValue}
              buttonType="Modifier"
            />
          </>
        )}
      </div>
    </div>
  );
};
