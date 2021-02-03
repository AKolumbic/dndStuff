import React, { useState } from "react";
import { Action } from "./action.component";
import { Inventory } from "./inventory.component";

export const Player = ({
  character,
  render,
}: {
  character: App.PlayerCharacter;
  render?: boolean;
}) => {
  const [showAction, toggleAction] = useState(false);
  const [snippet, setSnippet] = useState<{
    name: string;
    description: string;
  }>({ name: "", description: "" });
  const reset = (click?: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    click && click.preventDefault();
    toggleAction(!showAction);
    setSnippet({ name: "", description: "" });
  };

  const setAction = (
    click: React.MouseEvent<HTMLDivElement, MouseEvent>,
    action?: App.ClassAction
  ) => {
    click && click.preventDefault();

    if (!action) {
      reset();
      return;
    }

    if (action) {
      toggleAction(!showAction);
      setSnippet({
        name: action.name,
        description: action.snippet,
      });
      return;
    }
  };

  return (
    <>
      {render === false ? null : (
        <div>
          <h1 onClick={(click) => reset(click)}>{character.name}</h1>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Action
              showAction={showAction}
              actions={character.actions.class}
              setAction={setAction}
              snippet={snippet}
            />
            <Inventory data={character?.characterValues} render={showAction}/>
          </div>
        </div>
      )}
    </>
  );
};
