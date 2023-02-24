import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";

export const TopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <CheckroomIcon sx={{ mr: 1 }} />
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Closet
        </Typography>
        <Button color="inherit">FAQ</Button>
        <Button color="inherit">Example</Button>
      </Toolbar>
    </AppBar>
  );
};
