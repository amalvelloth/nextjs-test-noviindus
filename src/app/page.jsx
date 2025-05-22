// page.jsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PhoneInput from "../components/PhoneInput";
import CodeInput from "../components/CodeInput";
import ProfileInput from "../components/ProfileInput";

import illustration from "../../public/images/learning-illustration.png";

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: "",
    code: "",
    name: "",
    email: null,
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Redirect to the welcome page after final submission
    router.push('/welcome');
  };

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r bg-[url('/images/bg.png')] p-4">
      <div className="flex flex-col md:flex-row bg-gradient-to-b from-[#1c3141] to-[#2d4e67] rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Left Side - Branding/Image */}
        <div className="text-white p-8 flex flex-col justify-center items-center md:w-1/2">
          <div className="flex justify-center">
            <Image
              src={illustration}
              alt="Learning Illustration"
              className="w-100"
            />

          </div>
        </div>

        {/* Right Side - Dynamic Component */}
        <div className="p-8 md:w-1/2 bg-white m-3 rounded-md">
          {step === 1 && (
            <PhoneInput
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleNext}
            />
          )}
          {step === 2 && (
            <CodeInput
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )}
          {step === 3 && (
            <ProfileInput
              formData={formData}
              updateFormData={updateFormData}
              onPrev={handlePrev}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}