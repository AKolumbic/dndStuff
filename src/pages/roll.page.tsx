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

  const updateDiceValue = (value: App.DiceType) => {
    setDieType(value);
  };
  const updateModifierValue = (value: number) => {
    setModifier(value);
  };

  const updateRoll = (value: string) => {
    value === "20"
      ? setRollStyle({ color: "green" })
      : value === "1"
      ? setRollStyle({ color: "red" })
      : setRollStyle({ color: "white" });
    setPreviousRolls([...previousRolls, ` ${value}, `]);
    setRollValue(value);
  };

  return (
    <div>
      <h3
        onClick={(click) => {
          click.preventDefault();
          setPreviousRolls([]);
        }}
        style={{ marginBottom: "10%" }}
      >
        {previousRolls}
      </h3>
      <label>Roll: </label>
      <RollButton
        render={false}
        dice={{
          die: die,
          modifier: modifier,
        }}
        updateRoll={updateRoll}
      />

      <RollButton
        render={true}
        dice={{
          die: 20,
          modifier: 0,
        }}
        updateRoll={updateRoll}
      />
      <h1 style={rollStyle}>{rollValue}</h1>

      <div style={{ marginTop: "25%" }}>
        <Dropdown render={false} updateDiceValue={updateDiceValue} />
        <IncrementButton
          render={false}
          updateValue={updateModifierValue}
          buttonType="Modifier"
        />
      </div>
    </div>
  );
};
