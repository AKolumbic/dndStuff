import { useState, useEffect } from "react";
import { Dropdown } from "../components/dropdown.component";

import { fetchData } from "../services/api.service";
export const APIPage = () => {
  const [loading, setLoading] = useState(false);
  const [localState, setLocalState] = useState<App.APIResponse>({
    count: 0,
    results: [],
  } as App.APIResponse);
  const [apiType, setAPIType] = useState("monsters");
  const [hasClicked, setHasClicked] = useState(false);

  const setData = (data: App.APIResponse) => {
    setLocalState(data);
  };

  const onChange = (value: App.API) => {
    setAPIType(value);
  };

  useEffect(() => {
    if (!hasClicked) return;
    setLoading(true);
    fetchData(setData, { api: apiType });
    setLoading(false);

    return () => {
      setLoading(false);
    };
  }, [apiType, hasClicked]);

  return (
    <div>
      <Dropdown updateAPIType={onChange} />
      {hasClicked ? null : (
        <button
          onClick={(click) => {
            click.preventDefault();
            setHasClicked(true);
          }}
        >
          {`fetch ${apiType} data`}
        </button>
      )}
      {loading ? (
        "LOADING"
      ) : (
        <div>
          {localState.results.map((item) => {
            return <div>{item.name}</div>;
          })}
        </div>
      )}
    </div>
  );
};
