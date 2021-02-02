import { useState } from "react";
import { map } from "lodash";
import { Dropdown } from "../components/dropdown.component";
import { Search } from "../components/search.component";
import { fetchData } from "../services/api.service";

export const APIPage = () => {
  const [localState, setLocalState] = useState<App.APIResponse>({
    count: 0,
    results: [],
  } as App.APIResponse);
  const [apiType, setAPIType] = useState("monsters");
  const [monsterData, setMonsterData] = useState<any>(null);

  const setData = (data: App.APIResponse) => {
    setLocalState(data);
  };

  const onChange = (value: App.API) => {
    setAPIType(value);
  };

  const updateQuery = (value: string) => {
    const searchValue = value.replace(/\s+/g, "-").toLowerCase();
    const options = { api: apiType, query: searchValue };
    fetchData(setMonsterData, options);
  };

  const logData = (click: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    click.preventDefault();
    // map(monsterData, (monster) => {
      console.log("MONSTER: ", monsterData);
    // });
    map(localState.results, result => {
      console.log("results: ", result);
    });
  };

  return (
    <div>
      <Dropdown updateAPIType={onChange} />
      <button
        onClick={(click) => {
          click.preventDefault();
          fetchData(setData, { api: apiType });
        }}
      >
        {`fetch ${apiType} data`}
      </button>
      <Search updateQuery={updateQuery} />
      <div>
        {!monsterData ? (
          map(localState.results, result => {
            return (
                  <div
                    key={result.index}
                    onClick={(click) => {
                      click.preventDefault();
                      updateQuery(result.name);
                    }}
                  >
                    {result.name}
                  </div>
                );
          })
        ) : (
          <button onClick={(click) => logData(click)}>Check Console</button>
        )}
      </div>
    </div>
  );
};
