import { Option } from "@/types";
import clsx from "clsx";
import { PropsWithChildren } from "react";

type OptionLabelProps = {
  option: Option;
  isSelected: boolean;
};

const OptionLabel = ({
  option,
  isSelected,
  children,
}: PropsWithChildren<OptionLabelProps>) => {
  return (
    <label
      key={option.Id}
      htmlFor={option.Id.toString()}
      className={clsx(
        "flex items-start gap-[0.625rem] border border-1 rounded-sm px-4 py-2",
        isSelected ? "border-light-blue bg-transparent-blue" : "border-inactive"
      )}
    >
      {children}
      <span className="text-primary">{option.Answer}</span>
    </label>
  );
};

export default OptionLabel;
