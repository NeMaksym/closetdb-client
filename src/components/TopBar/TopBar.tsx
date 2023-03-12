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
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

interface TopBarProps {
  handleAddItem: () => void;
  handleAddOccasion: () => void;
}

export const TopBar = ({ handleAddItem, handleAddOccasion }: TopBarProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <CheckroomIcon sx={{ mr: 1 }} />
        <Typography variant="h5">Closet</Typography>
        <Box sx={{ ml: "auto", mr: "auto" }}>
          <IconButton color="inherit">
            <AddIcon onClick={handleAddItem} />
          </IconButton>
          <IconButton color="inherit">
            <PlaylistAddIcon onClick={handleAddOccasion} />
          </IconButton>
        </Box>
        <Button color="inherit">FAQ</Button>
        <Button color="inherit">Demo</Button>
      </Toolbar>
    </AppBar>
  );
};
