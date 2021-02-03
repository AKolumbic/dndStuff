import { useState, useEffect } from "react";
import { uniqBy } from "lodash";

export const Inventory = ({
  data,
  render,
}: {
  data: any[];
  render?: boolean;
}) => {
  const [inventory, setInventory] = useState(data);
  useEffect(() => {
    const filtered = uniqBy(
      data
        // eslint-disable-next-line array-callback-return
        .map((item) => {
          if (item.typeId === 8) {
            return { name: item.value };
          }
        })
        .filter((item) => {
          return item !== undefined;
        }),
      "name"
    );

    setInventory(filtered);
  }, [data]);
  return (
    <>
      {render ? null : (
        <div>
          {inventory.map((item, index) => {
            return <div key={index}>{item.name}</div>;
          })}
        </div>
      )}
    </>
  );
};
