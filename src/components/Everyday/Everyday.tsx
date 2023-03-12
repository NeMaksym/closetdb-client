import { GroupTitle } from "..";
import { Item, Occasion, Season } from "../../types";

interface EverydayProps {
  occasions: Occasion[];
}

export const Everyday = ({ occasions }: EverydayProps) => {
  const everydayOccasion = occasions.find((occasion) => occasion.isEveryday);

  // TODO: Implement error handling
  if (!everydayOccasion) return null;

  const seasons = groupBySeason(everydayOccasion.items);

  return (
    <>
      <GroupTitle title={everydayOccasion.title} />

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
