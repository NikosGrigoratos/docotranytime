import { Question } from "@/types";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import useQuestionnaireStore from "@/store/questionnaire";
import OptionLabel from "./OptionLabel";

type RadioOptionsProps = {
  question: Question;
};

const RadioOptions = ({ question }: RadioOptionsProps) => {
  const { currentQuestionSelectedOptions, setCurrentQuestionSelectedOptions } =
    useQuestionnaireStore();

  const onChange = (optionId: string) => {
    const selectedOption = question.Options.find((opt) => opt.Id === +optionId);
    if (!selectedOption) return;
    setCurrentQuestionSelectedOptions([selectedOption]);
  };

  return (
    <RadioGroup
      value={currentQuestionSelectedOptions[0]?.Id.toString()}
      onValueChange={onChange}
    >
      {question.Options.map((option) => {
        const isSelected = option.Id === currentQuestionSelectedOptions[0]?.Id;

        return (
          <OptionLabel option={option} isSelected={isSelected}>
            <RadioGroupItem
              id={option.Id.toString()}
              value={option.Id.toString()}
            />
          </OptionLabel>
        );
      })}
    </RadioGroup>
  );
};

export default RadioOptions;
