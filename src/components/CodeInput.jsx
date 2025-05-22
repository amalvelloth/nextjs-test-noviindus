'use client';
import { useState } from 'react';

export default function CodeInput({ formData, updateFormData, onNext, onPrev }) {
  const [code, setCode] = useState(formData.code);

  const handleSubmit = () => {
    updateFormData({ code });
    onNext();
  };

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className="top">
        <h2 className="text-xl font-semibold mb-4  text-[#1C3141]">Enter the code we texted you</h2>
        <p className="text-sm  text-[#1C3141] mb-4">We've sent an SMS to +91 {formData.phone}</p>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="123 456"
          className="w-full p-3 border rounded-md text-[#1C3141] mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm font-bold text-[#1C3141] mb-4 cursor-pointer hover:underline">Resend code</p>
      </div>
      <div className="bottom">
        <div className="flex space-x-4">
          <button
            onClick={onPrev}
            className="w-1/2 bg-transparent border-2 border-black text-black p-3 rounded-md"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="w-1/2 bg-[#1C3141] text-white p-3 rounded-md hover:bg-[#162734] transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}