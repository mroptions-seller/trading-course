import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
const Disclaimer = () => {
  return (
    <Grid item xs={12} className="disclaimer">
      <Typography variant="h5" component="h2" gutterBottom>
        Disclaimer
      </Typography>
      <Typography variant="body1" gutterBottom>
        Any advice or information on this website is only for education purpose.
        It does not take into account your personal circumstances. Please do not
        trade or invest based solely on this information. By using the
        Mr.options_seller or viewing any material or using the information
        within this site you agree that this is general education material and
        you will not hold any person or entity responsible for loss or damages
        resulting from the content or general advice provided here . The past
        performance of any trading system or methodology is not necessarily
        indicative of future results. If you decide to invest real money, all
        trading decisions should be your own. There are no guarantees or
        certainties in trading. Reliability of trading strategies are in
        probabilities only. Trading involves hard work, risk management &
        discipline. We make no warranty as to the accuracy of any information or
        Contributions on the Website or in the Course and do not accept any
        responsibility for any errors or omissions, or for any damage or loss
        you may suffer. The terms of this privacy policy may change from time to
        time, so please check back regularly to keep up to date on our
        practices.
      </Typography>
    </Grid>
  );
};

export default Disclaimer;
