import { queryClient } from "@/api";
import { initialValues, QuestionnaireState } from "./questionnaire";
import { GET_QUESTIONS } from "@/api/questionnaire/query-keys";
import { QuestionsResponse } from "@/api/questionnaire/api";

export const handleGoBackState = (
  state: QuestionnaireState,
  prevQuestionId: number
) => {
  const prevQuestionSelectedAnswers =
    state.selectedQuestionOptions[prevQuestionId];

  return {
    questionIdsSequence: state.questionIdsSequence.slice(0, -1),
    currentQuestionId: prevQuestionId,
    currentQuestionSelectedOptions: prevQuestionSelectedAnswers,
    selectedQuestionOptions: Object.fromEntries(
      Object.entries(state.selectedQuestionOptions).filter(
        ([key]) => key !== prevQuestionId.toString()
      )
    ),
  };
};

const getCurrentOptionalQuestionDetails = (state: QuestionnaireState) => {
  const { Data } =
    queryClient.getQueryData<QuestionsResponse>([GET_QUESTIONS]) || {};

  return Data?.find((question) => question.Id === state.currentQuestionId)
    ?.Options?.[0];
};

const generateGoToQuestionState = (state: QuestionnaireState) => {
  const nonSelectedOption = getCurrentOptionalQuestionDetails(state);

  return {
    selectedQuestionOptions: {
      ...state.selectedQuestionOptions,
      [state.currentQuestionId as number]: state.currentQuestionSelectedOptions,
    },
    questionIdsSequence: [
      ...state.questionIdsSequence,
      state.currentQuestionId as number,
    ],
    currentQuestionId:
      state.currentQuestionSelectedOptions[0]?.GoToQuestionId ||
      nonSelectedOption?.GoToQuestionId,
    currentQuestionSelectedOptions: [],
  };
};

const generateUrl = (state: QuestionnaireState) => {
  const selectedAnswers = [
    ...Object.values(state.selectedQuestionOptions).flat(),
    ...state.currentQuestionSelectedOptions,
  ];

  const groupedAnswers = Object.groupBy(
    selectedAnswers,
    ({ FilterQueryStringKey }) => `${FilterQueryStringKey}`
  );

  return Object.entries(groupedAnswers).reduce((prev, [key, value]) => {
    if (key === "null") return prev;
    let categoryString = `${key}=`;

    value?.forEach((option, index) => {
      if (index > 0) {
        categoryString += `_and_${option.FilterQueryStringValue}`;
      } else {
        categoryString += option.FilterQueryStringValue;
      }
    });

    return prev ? `${prev}&${categoryString}` : `${prev}${categoryString}`;
  }, "");
};

export const handleContinueState = (state: QuestionnaireState) => {
  const selectedOption = state.currentQuestionSelectedOptions[0];
  const nonSelectedOption = getCurrentOptionalQuestionDetails(state);

  const questionActionType = selectedOption
    ? selectedOption.Action
    : nonSelectedOption?.Action;

  if (questionActionType === "GoToQuestion")
    return generateGoToQuestionState(state);

  return { ...state, initialValues, generatedUrl: generateUrl(state) };
};
