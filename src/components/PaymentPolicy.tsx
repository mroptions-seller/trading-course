import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
const PaymentPolicy = () => {
  return (
    <Grid item xs={12}>
      <Typography variant="h5" component="h2" gutterBottom>
        Payment Policy
      </Typography>
      <Typography variant="body1" gutterBottom>
        We must receive payment for the whole Course you wish to receive, and
        after that, you will get Access to the Course.
      </Typography>
      <Typography variant="body1" gutterBottom>
        How to Pay?
      </Typography>
      <Typography variant="body1" gutterBottom>
        Pay ₹ 2,999 using any application like Googlepay, Paytm, Phonepay or any
        UPIs on the following:
      </Typography>
      <Typography variant="body1" gutterBottom>
        UPI ID – mr.optionseller@upi
      </Typography>
    </Grid>
  );
};

export default PaymentPolicy;
