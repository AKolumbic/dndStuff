import React, { useState } from "react";
import { Dropdown } from "../components/dropdown.component";
import { IncrementButton } from "../components/increment-button.component";
import { RollButton } from "../components/roll-button.component";

export const MainPage = () => {
  const [die, setDieType] = useState<App.DiceType>(20);
  const [modifier, setModifier] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateDiceValue = (value: App.DiceType) => {
    setDieType(value);
  };

  const updateMultiplierValue = (value: number) => {
    setMultiplier(value);
  };

  const updateModifierValue = (value: number) => {
    setModifier(value);
  };

  return (
    <div>
      <label>Roll The Dice: </label>
      <RollButton die={die} modifier={modifier} multiplier={multiplier} />


      <div style={{ marginTop: "25%" }}>
        <Dropdown updateDiceValue={updateDiceValue} />
        <IncrementButton updateValue={updateMultiplierValue} buttonType='Multiplier' />
        <IncrementButton updateValue={updateModifierValue} buttonType='Modifier' />
      </div>      
    </div>
  );
};
