import { useState } from "react";
import { Dropdown } from "../components/dropdown.component";
import { IncrementButton } from "../components/increment-button.component";
import { RollButton } from "../components/roll-button.component";

export const RollPage = () => {
  const [die, setDieType] = useState<App.DiceType>(20);
  const [modifier, setModifier] = useState(0);
  const [rollValue, setRollValue] = useState("");
  const [rollStyle, setRollStyle] = useState({ color: "white" });
  const [previousRolls, setPreviousRolls] = useState<string[]>([]);
  const [text, setText] = useState<string>("");
  const [total, setTotal] = useState<string>("");

  const reset = (click?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    click && click.preventDefault();
    setText("");
    setTotal("");
    setPreviousRolls([]);
  };

  const updateDiceValue = (value: App.DiceType) => {
    reset();
    setRollValue("");
    setDieType(value);
  };

  const updateModifierValue = (value: number) => {
    setModifier(value);
  };

  const updateRoll = (value: string) => {
    if (previousRolls.length === 10) {
      setText("Too Many Rolls");
      setTotal("");
      setRollValue("");
      setPreviousRolls([]);
      return;
    }

    value === die.toString()
      ? setRollStyle({ color: "green" })
      : value === "1"
      ? setRollStyle({ color: "red" })
      : setRollStyle({ color: "white" });

    setPreviousRolls([...previousRolls, ` ${value} `]);
    setTotal(`${Number(total === "" ? 0 : Number(total)) + Number(value)}`);
    setText("Previous Rolls (Click to Remove): ");
    setRollValue(value);
  };

  return (
    <div>
      <div
        onClick={(click) => reset(click)}
        style={{ marginTop: "10%", marginBottom: "10%" }}
      >
        <h5>{text}</h5>
        <div>{previousRolls}</div>
        <div>{total}</div>
      </div>
      <label>Roll: </label>
      <RollButton
        dice={{
          die: die,
          modifier: modifier,
        }}
        updateRoll={updateRoll}
      />
      <h1 style={rollStyle}>{rollValue}</h1>

      <div style={{ marginTop: "25%" }}>
        <Dropdown updateDiceValue={updateDiceValue} />
        <IncrementButton
          render={false}
          updateValue={updateModifierValue}
          buttonType="Modifier"
        />
      </div>
    </div>
  );
};
