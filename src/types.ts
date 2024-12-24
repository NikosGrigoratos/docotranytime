export interface Option {
  Id: number;
  AnswerId: number;
  Answer: string;
  Action: "GoToQuestion" | "GoToUrl";
  FilterQueryStringKey: string | null;
  FilterQueryStringValue: string;
  GoToQuestionId: number;
}

export interface Question {
  Id: number;
  Question: string;
  Subtitle: string;
  QuestionSelectType: 0 | 1;
  IsOptional: boolean;
  Options: Option[];
}
