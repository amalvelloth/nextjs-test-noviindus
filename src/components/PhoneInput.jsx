'use client';
import { useState } from 'react';

export default function PhoneInput({ formData, updateFormData, onNext }) {
  const [phone, setPhone] = useState(formData.phone);

  const handleSubmit = () => {
    updateFormData({ phone });
    onNext();
  };

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className="top">
        <h2 className="text-xl font-semibold mb-4 text-[#1C3141]">Enter your phone number</h2>
        <p className="text-sm text-[#1C3141] mb-4">We use your mobile number to identify your account</p>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91 1234567891"
          className="w-full p-3 border rounded-md mb-4 focus:outline-none text-[#1C3141] focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-xs text-gray-500 mb-6">By tapping Get Started, you agree to the Terms & Conditions.</p>
      </div>
      <div className="bottom">
        <button
          onClick={handleSubmit}
          className="w-full bg-[#1C3141] text-white p-3 rounded-md cursor-pointer hover:bg-[#162734] transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}