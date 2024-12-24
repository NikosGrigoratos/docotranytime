import { useGetQuestions } from "@/api/questionnaire/queries";
import Question from "./Question";
import useQuestionnaireStore from "@/store/questionnaire";

const Questionnaire = () => {
  const { data } = useGetQuestions();
  const currentQuestionId = useQuestionnaireStore(
    (state) => state.currentQuestionId
  );

  if (!data || !currentQuestionId) return null;

  const currentQuestion = data.map.get(currentQuestionId);

  if (!currentQuestion) return null;

  return <Question question={currentQuestion} />;
};

export default Questionnaire;
