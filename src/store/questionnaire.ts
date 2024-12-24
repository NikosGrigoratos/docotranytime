import { Option } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { handleContinueState, handleGoBackState } from "./helpers";

type QuestionnaireStateValues = {
  questionIdsSequence: number[];
  currentQuestionId: number | null;
  currentQuestionSelectedOptions: Option[];
  selectedQuestionOptions: Record<string, Option[]>;
  generatedUrl: string;
};

export type QuestionnaireState = {
  setCurrentQuestionId: (id: number) => void;
  setCurrentQuestionSelectedOptions: (selected: Option[]) => void;
  confirmSelectedQuestionOptions: () => void;
  goBack: () => void;
} & QuestionnaireStateValues;

export const initialValues: QuestionnaireStateValues = {
  questionIdsSequence: [],
  currentQuestionId: null,
  selectedQuestionOptions: {},
  currentQuestionSelectedOptions: [],
  generatedUrl: "",
};

const useQuestionnaireStore = create<QuestionnaireState>()(
  persist(
    (set) => ({
      ...initialValues,
      setCurrentQuestionId: (id) => set(() => ({ currentQuestionId: id })),
      setCurrentQuestionSelectedOptions: (selected: Option[]) =>
        set(() => ({ currentQuestionSelectedOptions: selected })),

      confirmSelectedQuestionOptions: () =>
        set((state) => handleContinueState(state)),

      goBack: () =>
        set((state) => {
          const prevQuestionId = state.questionIdsSequence.at(-1);
          if (!prevQuestionId) return { ...state, ...initialValues }; // We pressed back on the first question so we go back to the main screen

          return handleGoBackState(state, prevQuestionId);
        }),
    }),

    { name: "questionnaireStore" }
  )
);

export default useQuestionnaireStore;
