import StudentFeedback from "./HomeComponent/StudentFeedback";
import TutorFeedback from "./HomeComponent/TutorFeedback";

export default function ReviewComponent(props) {
  return (
    <section>
      <StudentFeedback />
      <TutorFeedback />
    </section>
  )
}