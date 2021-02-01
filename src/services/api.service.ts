export async function fetchData(
  setData: (data: App.APIResponse) => void,
  options: {
    api: string;
    query?: string;
    params?: string;
  }
) {
  if (!options.params && !options.query) {
    const resonse = await fetch(`https://www.dnd5eapi.co/api/${options.api}`);
    const data: App.APIResponse = await resonse.json();
    setData(data);
  }
}
