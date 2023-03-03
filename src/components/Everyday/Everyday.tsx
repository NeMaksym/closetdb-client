import AddIcon from "@mui/icons-material/Add";
import { GroupTitle, AddItemForm } from "..";
import { Item, Occasion, Season } from "../../types";

interface EverydayProps {
  occasion: Occasion;
}

export const Everyday = ({ occasion }: EverydayProps) => {
  const seasons = groupBySeason(occasion.items);

  const menuConfig = [
    {
      label: "Add item",
      icon: <AddIcon />,
      onClick: () => {
        console.log("Add item");
      }
    }
  ];

  return (
    <>
      <GroupTitle title="Everyday" menuConfig={menuConfig} />

      <AddItemForm />

      {Object.entries(seasons).map(([season, items]) => {
        if (!items.length) return null;

        return (
          <div key={season}>
            <h5>{season.charAt(0).toUpperCase() + season.slice(1)}</h5>
            <ul>
              {items.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
};

const groupBySeason = (items: Item[]) => {
  const result: Record<Season, Item[]> = {
    [Season.Summer]: [],
    [Season.DemiSeason]: [],
    [Season.Winter]: []
  };

  items.forEach((item) => {
    item.season.forEach((season) => {
      result[season].push(item);
    });
  });

  return result;
};
