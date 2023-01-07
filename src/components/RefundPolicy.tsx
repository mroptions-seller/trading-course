import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
const RefundPolicy = () => {
  return (
    <Grid item xs={12} className="disclaimer" sx={{ my: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Refund Policy
      </Typography>
      <Typography variant="body1" gutterBottom>
        Any payment made is totally non-refundable and non-transferable , We
        have A Non Refundable Policy Because After Payment We Provide You Our
        Course which is our intellectual property , Which Has Abundance Of
        Knowledge which is very valuable , And The knowledge Cannot Be Ever
        Taken Back From You .
      </Typography>
    </Grid>
  );
};

export default RefundPolicy;
