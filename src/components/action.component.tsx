export const Action = ({
  render,
  showAction,
  actions,
  setAction,
  snippet,
}: {
  actions: App.ClassAction[];
  render?: boolean;
  showAction: boolean;
  setAction: (
    click: React.MouseEvent<HTMLDivElement, MouseEvent>,
    action?: App.ClassAction | undefined
  ) => void;
  snippet: {
    name: string;
    description: string;
  };
}) => {
  return (
    <>
      {render === false ? null : (
        <div>
          {showAction
            ? null
            : actions.map((action, index) => {
                return (
                  <div
                    key={index}
                    onClick={(click) => {
                      setAction(click, action);
                    }}
                  >
                    <div>{action.name}</div>
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
        </div>
      )}
    </>
  );
};
