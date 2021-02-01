import { useState, useEffect } from "react";

import { fetchData } from "../services/api.service";
export const APIPage = () => {
  const [loading, setLoading] = useState(false);
  const [localState, setLocalState] = useState<App.APIResponse>(
    {} as App.APIResponse
  );
  const api = 'monsters';

  const setData = (data: App.APIResponse) => {
    setLocalState(data);
  };

  useEffect(() => {
    setLoading(true);
    fetchData(setData, { api });
    setLoading(false);

    return () => {
      setLoading(false);
    };
  }, [api]);

  return (
    <div>
      <button onClick={() => console.log("localState: ", localState)}>
        {`fetch ${api} data`}
      </button>
      {loading ? "LOADING" : (
          <div>

          </div>
        )}
    </div>
  );
};
