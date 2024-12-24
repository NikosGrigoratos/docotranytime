import { useQuery } from "@tanstack/react-query";
import { GET_QUESTIONS } from "./query-keys";
import { getQuestions } from "./api";

export const useGetQuestions = () => {
  return useQuery({
    queryKey: [GET_QUESTIONS],
    queryFn: getQuestions,
    retry: false,
    select: (response) => ({
      array: response.Data,
      map: new Map(response.Data.map((question) => [question.Id, question])),
    }),
  });
};
