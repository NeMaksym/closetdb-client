import Grid from "@mui/material/Unstable_Grid2";
import { Collapse, Paper, TextField, Button, Stack } from "@mui/material";
import { FormikProps } from "formik";
import { FormikValues } from "./AddOccasionFormContainer";

interface AddItemFormProps {
  formik: FormikProps<FormikValues>;
  open: boolean;
  handleClose: () => void;
}

export const AddOccasionForm = ({
  formik,
  open,
  handleClose
}: AddItemFormProps) => {
  return (
    <Collapse in={open} unmountOnExit>
      <Paper elevation={1}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Stack spacing={2} direction="row" justifyContent="flex-end">
              <TextField
                required
                fullWidth
                size="small"
                id="title"
                label="Title"
                variant="outlined"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
              <Button
                sx={{ maxHeight: 40 }}
                variant="contained"
                size="small"
                onClick={formik.submitForm}
              >
                Add
              </Button>
              <Button
                sx={{ maxHeight: 40 }}
                variant="outlined"
                size="small"
                onClick={handleClose}
              >
                Close
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Collapse>
  );
};
