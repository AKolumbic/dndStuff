import React, { useState } from "react";
import { random } from "../services/utils";

export const RollButton = (dice: App.Dice) => {
  const { die, modifier, multiplier } = dice;
  const [diceRoll, setDiceRoll] = useState<App.Roll>({
    text: "",
    critRoll: false,
    critFail: false,
    result: 0,
  });

  const roll = (click: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    click.preventDefault();
    const result = !multiplier ? random(1, die) : multiplier * random(1, die);
    const _modifier = !modifier ? 0 : modifier;

    setDiceRoll({
      text: `${multiplier}d${die}`,
      critRoll: result === 20,
      critFail: result === 1,
      result: result + _modifier,
    });
  };

  const style = diceRoll.critRoll
    ? { color: "green" }
    : diceRoll.critFail
    ? { color: "red" }
    : { color: "black" };

  const text = `${diceRoll.text}: ${diceRoll.result}`;

  return (
    <div>
      <button onClick={(click) => roll(click)}>
        <div style={style}>{text}</div>
      </button>
    </div>
  );
};
