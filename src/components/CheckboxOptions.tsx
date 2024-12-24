import useQuestionnaireStore from "@/store/questionnaire";
import { Option, Question } from "@/types";
import { Checkbox } from "./ui/checkbox";
import OptionLabel from "./OptionLabel";
import { useMemo } from "react";

type CheckboxOptionsProps = { question: Question };

const CheckboxOptions = ({ question }: CheckboxOptionsProps) => {
  const { currentQuestionSelectedOptions, setCurrentQuestionSelectedOptions } =
    useQuestionnaireStore();

  const selectedIds = useMemo(
    () => currentQuestionSelectedOptions.map((option) => option.Id),
    [currentQuestionSelectedOptions]
  );

  const onChange = (option: Option, isSelected: boolean) => {
    if (isSelected) {
      setCurrentQuestionSelectedOptions(
        currentQuestionSelectedOptions.filter((opt) => opt.Id !== option.Id)
      );
      return;
    }
    setCurrentQuestionSelectedOptions([
      ...currentQuestionSelectedOptions,
      option,
    ]);
  };

  return (
    <div className="flex flex-col gap-2">
      {question.Options.map((option) => {
        const isSelected = selectedIds.includes(option.Id);

        return (
          <OptionLabel key={option.Id} option={option} isSelected={isSelected}>
            <Checkbox
              className="mt-[0.125rem]"
              id={option.Id.toString()}
              checked={isSelected}
              onCheckedChange={() => onChange(option, isSelected)}
            />
          </OptionLabel>
        );
      })}
    </div>
  );
};

export default CheckboxOptions;
