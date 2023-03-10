import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Grid } from "@mui/material";
const Price = () => {
  return (
    <Grid item xs={12}>
      <Typography variant="h5" component="h2" gutterBottom>
        Price
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="One time fee: ₹ 2,999 /-" />
          </ListItemButton>
        </ListItem>
      </List>
    </Grid>
  );
};

export default Price;
