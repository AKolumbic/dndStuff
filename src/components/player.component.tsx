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
    index: number;
  }>({ name: "", description: "", index: -1 });
  return (
    <>
      {render === false ? null : (
        <div>
          <h1>{character.name}</h1>
          <>
            {showAction
              ? null
              : character.actions?.class.map((action, index) => {
                  return (
                    <div key={index}>
                      <h5
                        onClick={(click) => {
                          click.preventDefault();
                          toggleAction(!showAction);
                          setSnippet({
                            name: action.name,
                            description: action.snippet,
                            index,
                          });
                        }}
                      >
                        {action.name}
                      </h5>
                    </div>
                  );
                })}
            {showAction === false ? null : (
              <div>
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
