export async function fetchData(
  setData: (data: any) => void,
  options: {
    api: string;
    query?: string;
    params?: string;
  }
) {
  const { api, query, params } = options;

  if (!options.query && !options.params) {
    const response = await fetch(`https://www.dnd5eapi.co/api/${api}`);
    const data: App.APIResponse = await response.json();
    setData(data);
    return;
  }

  if (query && !params) {
    const response = await fetch(`https://www.dnd5eapi.co/api/${api}/${query}`);
    const data: App.DataType = await response.json();
    console.log("DATA: ", data);
    setData(data);
    return;
  }

  const response = await fetch(
    `https://www.dnd5eapi.co/api/${api}/${query}/${params}`
  );
  const data: App.APIResponse = await response.json();
  setData(data);
}

export async function fetchPlayerData(id: number) {
  const response = await fetch(`https://ddb-character.vttassets.com/${id}`);
  const json = await response.json();
  const playerData: App.PlayerCharacter = json.data;
  return playerData;
}
