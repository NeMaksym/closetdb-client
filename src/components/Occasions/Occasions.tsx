import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

import { Occasion } from "../../types";
import { GroupTitle, AddItemForm, AddOccasionForm } from "..";

interface OccasionsProps {
  occasions: Occasion[];
}

export const Occastions = ({ occasions }: OccasionsProps) => {
  const [openAddItemForm, setOpenAddItemForm] = useState(false);
  const [openAddOccasionForm, setOpenAddOccasionForm] = useState(false);

  const handleCloseAddItemForm = () => {
    setOpenAddItemForm(false);
  };

  const handleCloseAddOccasionForm = () => {
    setOpenAddOccasionForm(false);
  };

  const menuConfig = [
    {
      label: "Add occasion",
      icon: <PlaylistAddIcon />,
      onClick: () => {
        if (openAddItemForm) {
          setOpenAddItemForm(false);
        }

        setOpenAddOccasionForm(!openAddOccasionForm);
      }
    },
    {
      label: "Add item",
      icon: <AddIcon />,
      onClick: () => {
        if (openAddOccasionForm) {
          setOpenAddOccasionForm(false);
        }

        setOpenAddItemForm(!openAddItemForm);
      }
    }
  ];

  return (
    <>
      <GroupTitle title="By occasion" menuConfig={menuConfig} />

      <AddOccasionForm
        open={openAddOccasionForm}
        handleClose={handleCloseAddOccasionForm}
      />

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
