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
  const [apiType, setAPIType] = useState<App.API>("monsters");
  const [item, setItem] = useState<App.DataType>(null);

  const setData = (data: App.APIResponse) => {
    setItem(null);
    setLocalState(data);
  };

  const onChange = (value: App.API) => {
    setAPIType(value);
  };

  const updateQuery = (value: string) => {
    fetchData(setItem, { api: apiType, query: value });
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
      <Search render={false} updateQuery={updateQuery} />
      <div>
        {!item ? (
          map(localState.results, (result) => {
            return (
              <div
                key={result.index}
                onClick={(click) => {
                  click.preventDefault();
                  updateQuery(result.index);
                }}
              >
                {result.name}
              </div>
            );
          })
        ) : (
          <div>{item.name}</div>
        )}
      </div>
    </div>
  );
};
