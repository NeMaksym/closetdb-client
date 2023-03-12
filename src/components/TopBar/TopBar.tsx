import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import logo from "../../icons/logo.png";

interface TopBarProps {
  handleAddItem: () => void;
  handleAddOccasion: () => void;
}

export const TopBar = ({ handleAddItem, handleAddOccasion }: TopBarProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <img
          src={logo}
          alt="logo"
          width={32}
          height={32}
          style={{ marginRight: "16px" }}
        />
        <Typography
          variant="h5"
          sx={{
            fontFamily: '"NatureBeauty", sans-serif',
            position: "relative",
            top: "4px"
          }}
        >
          Closet DB
        </Typography>
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
