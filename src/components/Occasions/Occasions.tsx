import { useContext } from "react";
import { GroupTitle } from "..";
import { OccasionsContext } from "../../utils";

// TODO: Handle empty list
export const Occastions = () => {
  const { occasions } = useContext(OccasionsContext);

  return (
    <>
      <GroupTitle title="By occasion" />

      {occasions
        .filter((occasions) => !occasions.isEveryday)
        .map((occasion) => {
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
