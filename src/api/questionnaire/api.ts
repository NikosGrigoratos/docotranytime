import { get } from "..";
import { Question } from "../../types";

export type QuestionsResponse = {
  Data: Question[];
};

export const getQuestions = async () => {
  return (await get<QuestionsResponse>(`/GetQuestions`, { version: "v2" }))
    .data;
};
