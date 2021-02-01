export async function fetchData(
  setData: (data: App.APIResponse) => void,
  options: {
    api: string;
    query?: string;
    params?: string;
  }
) {
  if (!options.query && !options.params) {
    const resonse = await fetch(`https://www.dnd5eapi.co/api/${options.api}`);
    const data: App.APIResponse = await resonse.json();
    setData(data);
    return;
  }

  if (options.query && !options.params) {
    const resonse = await fetch(
      `https://www.dnd5eapi.co/api/${options.api}/${options.query}`
    );
    const data: App.APIResponse = await resonse.json();
    setData(data);
    return;
  }

  const resonse = await fetch(
    `https://www.dnd5eapi.co/api/${options.api}/${options.query}/${options.params}`
  );
  const data: App.APIResponse = await resonse.json();
  setData(data);
}
