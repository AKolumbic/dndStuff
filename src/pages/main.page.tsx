import React, { useState } from "react";
import { RollButton } from "../components/roll-button.component";

export const MainPage = () => {
  const [die, setDieType] = useState<App.DiceType>(20);
  const [modifier, setModifier] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(1);

  return (
    <div>
      <RollButton die={die} modifier={modifier} multiplier={multiplier} />
    </div>
  );
};
