import {
  Paper,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  ButtonGroup,
  Button,
  InputAdornment,
  FormHelperText,
  Stack
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { DatePicker } from "@mui/x-date-pickers";
import { FormikProps } from "formik";
import { FormikValues } from "./AddItemFormContainer";
import { Type, Season } from "../../types";

interface AddItemFormProps {
  formik: FormikProps<FormikValues>;
}

export const AddItemForm = ({ formik }: AddItemFormProps) => {
  return (
    <Paper elevation={1}>
      <Grid container spacing={2}>
        {/* Name */}
        <Grid xs={12}>
          <TextField
            required
            fullWidth
            size="small"
            id="name"
            label="Name"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>

        {/* Type */}
        <Grid xs={4}>
          <FormControl
            fullWidth
            required
            error={formik.touched.type && Boolean(formik.errors.type)}
          >
            <InputLabel id="type">Type</InputLabel>
            <Select
              size="small"
              labelId="type"
              id="type"
              name="type"
              label="Type"
              value={formik.values.type}
              onChange={formik.handleChange}
            >
              {Object.values(Type).map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              {formik.touched.type && formik.errors.type}
            </FormHelperText>
          </FormControl>
        </Grid>

        {/* Season */}
        <Grid xs={8} justifyContent="center">
          <Stack direction="row" justifyContent="center">
            <FormControl
              required
              error={formik.touched.season && Boolean(formik.errors.season)}
            >
              <InputLabel id="season" shrink>
                Season
              </InputLabel>
              <ButtonGroup
                aria-label="season picker"
                size="small"
                sx={{ mt: 1 }}
              >
                {Object.values(Season).map((season) => {
                  const isSelected = formik.values.season.includes(season);

                  return (
                    <Button
                      key={season}
                      variant={isSelected ? "contained" : "outlined"}
                      onClick={() => {
                        if (isSelected) {
                          formik.setFieldValue(
                            "season",
                            formik.values.season.filter((s) => s !== season)
                          );
                        } else {
                          formik.setFieldValue("season", [
                            ...formik.values.season,
                            season
                          ]);
                        }
                      }}
                    >
                      {season}
                    </Button>
                  );
                })}
              </ButtonGroup>
              <FormHelperText>
                {formik.touched.season && formik.errors.season}
              </FormHelperText>
            </FormControl>
          </Stack>
        </Grid>

        {/* Brand */}
        <Grid xs={6}>
          <TextField
            fullWidth
            size="small"
            id="brand"
            label="Brand"
            variant="outlined"
            value={formik.values.brand}
            onChange={formik.handleChange}
            error={formik.touched.brand && Boolean(formik.errors.brand)}
            helperText={formik.touched.brand && formik.errors.brand}
          />
        </Grid>
        <Grid xs={6} />

        {/* Price */}
        <Grid xs={6}>
          <TextField
            fullWidth
            size="small"
            label="Price"
            id="price"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              )
            }}
            type="number"
            inputProps={{ min: 0 }}
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
        </Grid>

        {/* Buy date */}
        <Grid xs={6}>
          <FormControl
            fullWidth
            error={formik.touched.startDate && Boolean(formik.errors.startDate)}
          >
            <DatePicker
              label="Buy date"
              value={formik.values.startDate}
              onChange={(newValue) =>
                formik.setFieldValue("startDate", newValue)
              }
              renderInput={(params) => <TextField {...params} size="small" />}
            />
            <FormHelperText>
              {formik.touched.startDate && formik.errors.startDate}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <Stack spacing={2} direction="row" justifyContent="flex-end">
            <Button
              variant="contained"
              size="small"
              onClick={formik.submitForm}
            >
              Add Item
            </Button>
            <Button variant="outlined" size="small">
              Close
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};
