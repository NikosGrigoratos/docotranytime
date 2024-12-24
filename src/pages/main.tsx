import { useGetQuestions } from "@/api/questionnaire/queries";
import Actions from "@/components/Actions";
import InstructionsSection from "@/components/InstructionsSection";
import Logo from "@/components/Logo";
import TopSection from "@/components/TopSection";
import useQuestionnaireStore from "@/store/questionnaire";
import Error from "./error";
import Spinner from "@/components/ui/spinner";
import Questionnaire from "@/components/Questionnaire";
import UrlPage from "./url-page";

const Main = () => {
  const currentQuestionId = useQuestionnaireStore(
    (state) => state.currentQuestionId
  );
  const generatedUrl = useQuestionnaireStore((state) => state.generatedUrl);
  const hasQuestionnaireStarted = currentQuestionId !== null;
  const { isError, isLoading } = useGetQuestions();

  return (
    <main className="flex flex-col items-center min-h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] pb-4 pt-8 px-4 md:pt-[4rem] lg:pt-[7rem] xl:pt-[9.125rem] overflow-y-auto">
      <Logo />
      {isError ? (
        <Error />
      ) : isLoading ? (
        <div className="h-[60vh] flex items-center justify-center">
          <Spinner />
        </div>
      ) : !hasQuestionnaireStarted ? (
        <>
          <TopSection />
          <InstructionsSection />
        </>
      ) : !generatedUrl ? (
        <Questionnaire />
      ) : (
        <UrlPage />
      )}
      {!isError && !isLoading && !generatedUrl && <Actions />}
    </main>
  );
};

export default Main;
