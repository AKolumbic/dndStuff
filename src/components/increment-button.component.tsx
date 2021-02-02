import React, { useState } from "react";

export const IncrementButton = ({
  updateValue,
  buttonType,
  render,
}: {
  updateValue: (value: number) => void;
  buttonType: "Multiplier" | "Modifier";
  render: boolean;
}) => {
  const [count, setCount] = useState(0);

  const handleClick = (
    click: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: "+" | "-"
  ) => {
    click.preventDefault();

    if (type === "-") {
      if (count === 0 && buttonType === "Multiplier") return;
      setCount(count - 1);
    } else if (type === "+") {
      if (count === 10) return;
      setCount(count + 1);
    }

    updateValue(count);
  };

  return (
    <>
      {render ? (
        <div>
          <label>{`Set a ${buttonType}: `}</label>
          <button onClick={(click) => handleClick(click, "-")}> - </button>
          {count}
          <button onClick={(click) => handleClick(click, "+")}> + </button>
        </div>
      ) : null}
    </>
  );
};
