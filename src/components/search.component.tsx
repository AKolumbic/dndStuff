import { useState } from "react";

export const Search = ({
  render,
  updateQuery,
}: {
  render: boolean;
  updateQuery: (value: string) => void;
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  return (
    <>
      {render ? (
        <div>
          <input onChange={(event) => handleChange(event)} />
          <button
            type="submit"
            onClick={(click) => {
              click.preventDefault();
              updateQuery(searchValue);
            }}
          >
            Search
          </button>
        </div>
      ) : null}
    </>
  );
};
