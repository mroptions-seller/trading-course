import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TimerIcon from "@mui/icons-material/Timer";
import { Grid } from "@mui/material";
const Duration = () => {
  return (
    <Grid item xs={12}>
      <Typography variant="h5" component="h2" gutterBottom>
        Duration
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <TimerIcon />
            </ListItemIcon>
            <ListItemText primary="One on One support every saturday (for 1 Month) " />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <TimerIcon />
            </ListItemIcon>
            <ListItemText primary="2 Live classes (1.5 hours each)" />
          </ListItemButton>
        </ListItem>
      </List>
    </Grid>
  );
};

export default Duration;
