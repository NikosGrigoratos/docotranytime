import InfoStep from "./InfoStep";

const stepsInfos = [
  "Answer a set of questions",
  `Our engine analyzes your answers, your profile, and over 1000 specialists' information.`,
  "Get a shortlist and schedule your initial appointment",
];

const InstructionsSection = () => {
  return (
    <section className="flex justify-center pb-28">
      <div>
        <span className="mt-4 flex justify-center text-gray text-center text-sm md:text-base">
          Answer a few quick questions to receive a shortlist of trusted
          professionals tailored to your needs.
        </span>

        <div className="p-4 mt-6 border-solid border-light-gray border-[1px] rounded-lg sm:ms-[-1rem] sm:w-[calc(100%+2rem)]">
          <h3 className="text-primary font-medium mb-4">How It Works</h3>

          {stepsInfos.map((info, index) => (
            <InfoStep key={index} number={index + 1} text={info} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructionsSection;
