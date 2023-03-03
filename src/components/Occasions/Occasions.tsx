import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import { Occasion } from "../../types";
import { GroupTitle, AddItemForm } from "..";

interface OccasionsProps {
  occasions: Occasion[];
}

export const Occastions = ({ occasions }: OccasionsProps) => {
  const [openAddItemForm, setOpenAddItemForm] = useState(false);

  const handleCloseAddItemForm = () => {
    setOpenAddItemForm(false);
  };

  const menuConfig = [
    {
      label: "Add item",
      icon: <AddIcon />,
      onClick: () => {
        setOpenAddItemForm(!openAddItemForm);
      }
    }
  ];

  return (
    <>
      <GroupTitle title="By occasion" menuConfig={menuConfig} />

      <AddItemForm
        open={openAddItemForm}
        handleClose={handleCloseAddItemForm}
      />

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
