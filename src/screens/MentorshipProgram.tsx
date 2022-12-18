import Container from "@mui/material/Container";
import CourseIntro from "../components/CourseIntro";
import DateTime from "../components/DateTime";
import Duration from "../components/Duration";
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
    </Container>
  );
};

export default MentorshipProgram;
