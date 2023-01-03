import { Grid } from "@mui/material";
import ButtonAppBar from "../components/Appbar";
import CourseIntro from "../components/CourseIntro";
import DateTime from "../components/DateTime";
import Disclaimer from "../components/Disclaimer";
import Duration from "../components/Duration";
import PaymentPolicy from "../components/PaymentPolicy";
import PersonalIntroduction from "../components/PersonalIntroduction";
import Price from "../components/Price";
import ProgramTitle from "../components/ProgramTitle";
const MentorshipProgram = () => {
  return (
    <Grid
    padding="16px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      container
      spacing={2}
    >
      <ButtonAppBar />
      <ProgramTitle />
      <CourseIntro />
      <DateTime />
      <Duration />
      <Price />
      <PaymentPolicy />
      <Disclaimer />
      <PersonalIntroduction />
    </Grid>
  );
};

export default MentorshipProgram;
