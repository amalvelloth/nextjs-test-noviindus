'use client';
import { useState } from 'react';

export default function ProfileInput({ formData, updateFormData, onPrev, onSubmit }) {
  const [name, setName] = useState(formData.name);
  const [email, setEmail] = useState(formData.email);
  const [qualification, setQualification] = useState(formData.qualification || '');
  const [profilePic, setProfilePic] = useState(formData.profilePic);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    updateFormData({ name, email, qualification, profilePic });
    onSubmit();
  };

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className="top">
        <h2 className="text-xl font-semibold mb-4 text-[#1C3141]">Add your details</h2>
        <div className="flex justify-center mb-4">
          <label className="relative cursor-pointer">
            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {/* Profile image */}
            <img
              src={profilePic || 'https://via.placeholder.com/80'}
              alt="Add your profile picture"
              className="w-20 h-20 text-xs border-dashed border-2 border-[#1C3141] p-2 object-cover"
            />
            {/* <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xs">
              Upload
            </span>
          </div> */}
          </label>
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your Full Name"
          className="w-full p-3 text-black border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email Address"
          className="w-full p-3 text-black border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          placeholder="Your qualification"
          className="w-full p-3 text-black border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
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