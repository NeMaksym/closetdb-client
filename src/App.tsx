import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Stack, Collapse } from "@mui/material";
import {
  TopBar,
  Occastions,
  Everyday,
  AddItemForm,
  AddOccasionForm
} from "./components";
import { Occasion } from "./types";
import { useLocalStorage, OccasionsContext } from "./utils";

const DEFAULT_OCCASIONS: Occasion[] = [
  {
    id: uuidv4(),
    title: "Everyday",
    isEveryday: true,
    items: [],
    order: 0
  }
];

function App() {
  const [occasions, setOccasions] = useLocalStorage<Occasion[]>(
    "occasions",
    DEFAULT_OCCASIONS
  );

  const [openAddItemForm, setOpenAddItemForm] = useState(false);
  const [openAddOccasionForm, setOpenAddOccasionForm] = useState(false);

  const handleCloseAddItemForm = () => {
    setOpenAddItemForm(false);
  };

  const handleCloseAddOccasionForm = () => {
    setOpenAddOccasionForm(false);
  };

  return (
    <OccasionsContext.Provider value={{ occasions, setOccasions }}>
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
              <Occastions />
            </Grid>
            <Grid xs={6}>
              <Everyday />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </OccasionsContext.Provider>
  );
}

export default App;
