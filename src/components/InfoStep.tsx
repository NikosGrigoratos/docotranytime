type InfoStepProps = {
  number: number;
  text: string;
};

const InfoStep = ({ number, text }: InfoStepProps) => {
  return (
    <div className="flex items-center mb-4">
      <div className="flex items-center justify-center rounded-full min-w-4 min-h-4 max-h-4 max-w-4 bg-blue text-white text-[0.625rem]">
        {number}
      </div>
      <span className="text-secondary font-normal text-sm ms-2">{text}</span>
    </div>
  );
};

export default InfoStep;
