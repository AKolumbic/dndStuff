import { useState, useEffect } from "react";
import { random } from "../services/utils";

export const RollButton = (dice: App.Dice) => {
  const { die, modifier, multiplier } = dice;
  const [rollText, setRollText] = useState<string>("");
  const [diceRoll, setDiceRoll] = useState<App.Roll>({
    text: "",
    critRoll: false,
    critFail: false,
    result: 0,
  });

  useEffect(() => {
    const text =
      modifier === 0
        ? `${multiplier}d${die}: `
        : `${multiplier}d${die}${modifier}: `;
    setRollText(text);
  }, [die, multiplier, modifier]);

  const roll = () => {
    const result = !multiplier
      ? random(1, die+1) + modifier
      : multiplier * random(1, die+1) + modifier;

    setDiceRoll({
      text: rollText,
      critRoll: result === 20,
      critFail: result === 1,
      result: result,
    });
  };

  const style = diceRoll.critRoll
    ? { color: "green" }
    : diceRoll.critFail
    ? { color: "red" }
    : { color: "black" };

  const text =
    diceRoll.result === 0
      ? `Roll ${multiplier}d${die}`
      : `${diceRoll.text}${diceRoll.result}`;

  return (
    <button onClick={roll}>
      {" "}
      {/*onClick={(click) => roll(click)}>*/}
      <div style={style}>{text}</div>
    </button>
  );
};
