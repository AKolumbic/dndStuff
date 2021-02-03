import { useState } from "react";

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
    action?: App.ClassAction,
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
        description: action.snippet
      });
      return;
    }
  };
  return (
    <>
      {render === false ? null : (
        <div>
          <h1 onClick={click => reset(click)}>{character.name}</h1>
          <>
            {showAction
              ? null
              : character.actions?.class.map((action, index) => {
                  return (
                    <div
                      key={index}
                      onClick={(click) => {
                        setAction(click, action);
                      }}
                    >
                      <h5>{action.name}</h5>
                    </div>
                  );
                })}
            {showAction === false ? null : (
              <div
                onClick={(click) => {
                  setAction(click);
                }}
              >
                <div>{snippet.name}</div>
                <p>{`${snippet.description}`}</p>
              </div>
            )}
          </>
          <>{}</>
        </div>
      )}
    </>
  );
};
