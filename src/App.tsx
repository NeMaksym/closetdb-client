import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Stack, Collapse } from "@mui/material";
import {
  TopBar,
  Occastions,
  Everyday,
  AddItemForm,
  AddOccasionForm
} from "./components";
import { occasions } from "./types";

function App() {
  const [openAddItemForm, setOpenAddItemForm] = useState(false);
  const [openAddOccasionForm, setOpenAddOccasionForm] = useState(false);

  const handleCloseAddItemForm = () => {
    setOpenAddItemForm(false);
  };

  const handleCloseAddOccasionForm = () => {
    setOpenAddOccasionForm(false);
  };

  return (
    <>
      <Stack spacing={4}>
        <TopBar
          handleAddItem={() => setOpenAddItemForm(!openAddItemForm)}
          handleAddOccasion={() => setOpenAddOccasionForm(!openAddOccasionForm)}
        />

        <Collapse in={openAddItemForm} unmountOnExit>
          <Box pl={4} pr={4}>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <AddItemForm handleClose={handleCloseAddItemForm} />
              </Grid>
            </Grid>
          </Box>
        </Collapse>

        <Collapse in={openAddOccasionForm} unmountOnExit>
          <Box pl={4} pr={4}>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <AddOccasionForm handleClose={handleCloseAddOccasionForm} />
              </Grid>
            </Grid>
          </Box>
        </Collapse>

        <Box pl={4} pr={4}>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Occastions occasions={occasions} />
            </Grid>
            <Grid xs={6}>
              <Everyday occasions={occasions} />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
}

export default App;
