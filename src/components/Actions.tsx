import useQuestionnaireStore from "@/store/questionnaire";
import { Button } from "./ui/button";
import { useGetQuestions } from "@/api/questionnaire/queries";
import Arrow from "@/assets/arrow.svg?react";
import clsx from "clsx";

const Actions = () => {
  const { isError, isLoading, data } = useGetQuestions();
  const {
    currentQuestionId,
    setCurrentQuestionId,
    confirmSelectedQuestionOptions,
    goBack,
    currentQuestionSelectedOptions,
  } = useQuestionnaireStore();
  const hasQuestionnaireStarted = currentQuestionId !== null;

  if (isError || isLoading || !data) return null;

  const isCurrentQuestionOptional = currentQuestionId
    ? data.map.get(currentQuestionId)?.IsOptional
    : true;
  const hasSelectedOptions = !!currentQuestionSelectedOptions.length;
  const isContinueDisabled = !isCurrentQuestionOptional && !hasSelectedOptions;

  return (
    <div className="fixed w-screen py-2 px-4 bottom-0 border-t border-1 border-[#EBEDF0] pt-2 bg-white">
      <div
        className={clsx(
          "flex w-full md:w-[90%] lg:w-[80%] 2xl:w-[73%]",
          !hasQuestionnaireStarted
            ? "flex-col sm:flex-row-reverse"
            : "flex-row-reverse"
        )}
      >
        {!hasQuestionnaireStarted ? (
          <>
            <Button
              variant="default"
              className="rounded"
              onClick={() => setCurrentQuestionId(data.array[0].Id)}
            >
              Start questionnaire
            </Button>
            <Button variant="link">Skip for now</Button>
          </>
        ) : (
          <>
            <Button
              variant="default"
              className="rounded bg-blue px-6 py-3 w-full sm:w-auto"
              disabled={isContinueDisabled}
              onClick={confirmSelectedQuestionOptions}
            >
              Continue
            </Button>
            <Button
              variant="link"
              className="border rounded-sm border-inactive h-10 w-10 me-2"
              onClick={goBack}
            >
              <Arrow />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Actions;
