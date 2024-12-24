import { Question as QuestionType } from "@/types";
import RadioOptions from "./RadioOptions";
import CheckboxOptions from "./CheckboxOptions";

type QuestionProps = { question: QuestionType };

const Question = ({ question }: QuestionProps) => {
  const isRadio = question.QuestionSelectType === 0;

  return (
    <section className="flex-1 flex items-center justify-center sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]">
      <div>
        <div className="mb-6">
          <h4 className="text-primary text-lg md:text-xl lg:text-2xl font-bold">
            {question.Question}
          </h4>
          {question.IsOptional && (
            <div className="flex items-center justify-center bg-light-gray text-gray text-xs px-2 py-[0.125rem] w-fit rounded-sm mt-1">
              Optional
            </div>
          )}
        </div>

        {isRadio ? (
          <RadioOptions question={question} />
        ) : (
          <CheckboxOptions question={question} />
        )}
      </div>
    </section>
  );
};

export default Question;
