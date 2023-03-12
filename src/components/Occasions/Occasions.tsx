import { useState } from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

import { Occasion } from "../../types";
import { GroupTitle, AddOccasionForm } from "..";

interface OccasionsProps {
  occasions: Occasion[];
}

export const Occastions = ({ occasions }: OccasionsProps) => {
  const [openAddOccasionForm, setOpenAddOccasionForm] = useState(false);

  const handleCloseAddOccasionForm = () => {
    setOpenAddOccasionForm(false);
  };

  const menuConfig = [
    {
      label: "Add occasion",
      icon: <PlaylistAddIcon />,
      onClick: () => {
        setOpenAddOccasionForm(!openAddOccasionForm);
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
