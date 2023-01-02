import Container from "@mui/material/Container";
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
    <Container maxWidth="lg">
      <ProgramTitle />
      <CourseIntro />
      <DateTime />
      <Duration />
      <Price />
      <PaymentPolicy />
      <Disclaimer />
      <PersonalIntroduction />
    </Container>
  );
};

export default MentorshipProgram;
