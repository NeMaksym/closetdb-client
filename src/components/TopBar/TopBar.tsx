import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckroomIcon from "@mui/icons-material/Checkroom";

interface TopBarProps {
  handleAddItem: () => void;
}

export const TopBar = ({ handleAddItem }: TopBarProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <CheckroomIcon sx={{ mr: 1 }} />
        <Typography variant="h5">Closet</Typography>
        <Box sx={{ ml: "auto", mr: "auto" }}>
          <IconButton color="inherit">
            <AddIcon onClick={handleAddItem} />
          </IconButton>
        </Box>
        <Button color="inherit">FAQ</Button>
        <Button color="inherit">Demo</Button>
      </Toolbar>
    </AppBar>
  );
};
