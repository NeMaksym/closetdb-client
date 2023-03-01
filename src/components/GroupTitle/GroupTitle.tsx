import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface GroupTitleProps {
  title: string;
}

export const GroupTitle = ({ title }: GroupTitleProps) => {
  return (
    <List>
      <ListItem
        sx={{ pl: 0 }}
        secondaryAction={
          <IconButton edge="end" aria-label="add">
            <AddIcon />
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
  );
};
