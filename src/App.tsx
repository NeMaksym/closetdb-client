import { useState } from "react";
import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { TopBar, Occastions, Everyday, AddItemForm } from "./components";
import { occasions, everydayOccasion } from "./types";

function App() {
  const [openAddItemForm, setOpenAddItemForm] = useState(false);

  const handleCloseAddItemForm = () => {
    setOpenAddItemForm(false);
  };

  return (
    <>
      <Stack spacing={4}>
        <TopBar handleAddItem={() => setOpenAddItemForm(!openAddItemForm)} />

        <Box pl={4} pr={4}>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <AddItemForm
                open={openAddItemForm}
                handleClose={handleCloseAddItemForm}
              />
            </Grid>
          </Grid>
        </Box>

        <Box pl={4} pr={4}>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Occastions occasions={occasions} />
            </Grid>
            <Grid xs={6}>
              <Everyday occasion={everydayOccasion} />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
}

export default App;
