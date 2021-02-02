import { useState, useEffect } from "react";
import { random } from "../services/utils";

export const RollButton = ({
  dice,
  updateRoll,
  render,
}: {
  dice: App.Dice;
  updateRoll: (value: string) => void;
  render?: boolean;
}) => {
  const { die, modifier } = dice;
  const [rollText, setRollText] = useState<string>("");
  const [diceRoll, setDiceRoll] = useState<App.Roll>({
    text: "",
    critRoll: false,
    critFail: false,
    result: 0,
  });
  const style = diceRoll.critRoll
    ? { color: "green" }
    : diceRoll.critFail
    ? { color: "red" }
    : { color: "black" };

  const text =
    diceRoll.result === 0
      ? `d${die}`
      : `${diceRoll.text}${diceRoll.result}`;

  useEffect(() => {
    const text =
      modifier === 0
        ? `d${die}: `
        : `d${die}${modifier}: `;
    setRollText(text);
  }, [die, modifier]);

  const roll = (click: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    click.preventDefault();
    const result = random(1, die + 1) + modifier;

    setDiceRoll({
      text: rollText,
      critRoll: result === 20,
      critFail: result === 1,
      result: result,
    });
    updateRoll(String(result));
  };

  return (
    <>
      {render === false ? null : (
        <button onClick={(click) => roll(click)}>
          <div style={style}>{text}</div>
        </button>
      )}
    </>
  );
};
