export async function fetchData(
  setData: (data: App.APIResponse) => void,
  options: {
    api: string;
    query?: string;
    params?: string;
  }
) {
  console.log('OPTIONS', options)
  if (!options.query && !options.params) {
    const response = await fetch(`https://www.dnd5eapi.co/api/${options.api}`);
    const data: App.APIResponse = await response.json();
    setData(data);
    return;
  }

  if (options.query && !options.params) {
    const response = await fetch(
      `https://www.dnd5eapi.co/api/${options.api}/${options.query}`
    );
    console.log('resonse: ', response)
    const data: App.APIResponse = await response.json();
    console.log('data: ', data)
    setData(data);
    return;
  }

  const response = await fetch(
    `https://www.dnd5eapi.co/api/${options.api}/${options.query}/${options.params}`
  );
  const data: App.APIResponse = await response.json();
  setData(data);
}
