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
    <div>
      <h2 className="text-xl font-semibold mb-4 text-blue-800">Add your details</h2>
      <div className="flex justify-center mb-4">
        <img
          src={profilePic || 'https://via.placeholder.com/80'}
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Profile Picture
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-3 border rounded-md"
        />
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your Full Name"
        className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your Email Address"
        className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        value={qualification}
        onChange={(e) => setQualification(e.target.value)}
        placeholder="Your qualification"
        className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex space-x-4">
        <button
          onClick={onPrev}
          className="w-1/2 bg-gray-500 text-white p-3 rounded-md hover:bg-gray-600 transition"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="w-1/2 bg-blue-800 text-white p-3 rounded-md hover:bg-blue-900 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}