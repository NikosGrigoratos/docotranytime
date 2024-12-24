import useQuestionnaireStore from "@/store/questionnaire";
import Error from "./error";
import { ACTUAL_API_URL, GENERATED_URL_PREFIX } from "@/api";

const UrlPage = () => {
  const generatedUrl = useQuestionnaireStore((state) => state.generatedUrl);
  const constructedUrl = `${ACTUAL_API_URL}${GENERATED_URL_PREFIX}${generatedUrl}`;

  if (!generatedUrl) return <Error />;

  return (
    <section className="flex-1 flex flex-col items-center justify-center sm:w-[70%] md:w-[50%] lg:w-[40%]">
      <h1 className="text-dark-blue font-bold text-[1.625rem] text-center mt-6">
        Questionnaire Completed!
        <br /> Use this url to find your match
      </h1>
      <a
        href={constructedUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 w-full text-center block break-all text-gray underline"
      >
        {constructedUrl}
      </a>
    </section>
  );
};

export default UrlPage;
