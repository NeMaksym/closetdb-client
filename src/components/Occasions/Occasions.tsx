import { GroupTitle } from "..";
import { Occasion } from "../../types";

interface OccasionsProps {
  occasions: Occasion[];
}

export const Occastions = ({ occasions }: OccasionsProps) => {
  return (
    <>
      <GroupTitle title="By occasion" />

      {occasions.map((occasion) => {
        const { id, title, items } = occasion;

        return (
          <div key={id}>
            <h5>{title}</h5>
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
