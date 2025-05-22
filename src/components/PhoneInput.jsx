'use client';
'use client';
import { useEffect, useRef, useState } from 'react';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';


export default function PhoneInput({ formData, updateFormData, onNext }) {
  const [phone, setPhone] = useState(formData.phone);
  const inputRef = useRef(null);
    useEffect(() => {
    const iti = intlTelInput(inputRef.current, {
      initialCountry: 'in',
      utilsScript:
        'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.min.js',
    });

    return () => {
      iti.destroy();
    };
  }, []);

  const handleSubmit = () => {
    updateFormData({ phone });
    onNext();
  };

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className="top">
        <h2 className="text-xl font-semibold mb-4 text-[#1C3141]">Enter your phone number</h2>
        <p className="text-sm text-[#1C3141] mb-4 ">We use your mobile number to identify your account</p>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          ref={inputRef}
          placeholder="Phone Number"
          className="w-full p-3 border rounded-md mb-4 focus:outline-none text-[#1C3141] focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-xs text-[#1C3141] pt-4 mb-6">By tapping Get Started, you agree to the Terms & Conditions.</p>
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