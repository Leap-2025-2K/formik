"use client";

import { useState } from "react";
import { SignUpEmailPassword } from "./components/SignUpEmailPassword";
import { SignUpUserName } from "./components/SignUpUserName";

const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const StepComponent = [SignUpUserName, SignUpEmailPassword][currentStep];

  return (
    <div className="flex justify-center mt-10">
      <StepComponent setCurrentStep={setCurrentStep} />
    </div>
  );
};

export default Page;
