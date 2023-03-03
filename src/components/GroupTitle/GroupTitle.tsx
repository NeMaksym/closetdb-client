import { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface GroupTitleProps {
  title: string;
  menuConfig: MenuItem[];
}

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export const GroupTitle = ({ title, menuConfig }: GroupTitleProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <List>
        <ListItem
          sx={{ pl: 0 }}
          secondaryAction={
            <IconButton edge="end" aria-label="add" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
        >
          <ListItemText
            primaryTypographyProps={{
              variant: "h5"
            }}
          >
            {title}
          </ListItemText>
        </ListItem>
      </List>
      <Menu
        id="group-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuConfig.map(({ label, icon, onClick }) => {
          const handleItemClick = () => {
            handleClose();
            onClick();
          };

          return (
            <MenuItem key={label} onClick={handleItemClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText>{label}</ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
