'use client';
import { useState, useEffect } from 'react';

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [remainingTime, setRemainingTime] = useState(8713);
  const [selectedOption, setSelectedOption] = useState(null);
  const [questionsStatus, setQuestionsStatus] = useState({
    1: 'answered',
    2: 'not-attempted',
    3: 'not-attempted',
    4: 'not-attempted',
    5: 'not-attempted',
    6: 'not-attempted',
    7: 'answered-and-marked',

  });

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setQuestionsStatus((prev) => ({
      ...prev,
      [currentQuestion]: 'answered',
    }));
  };

  const handleMarkForReview = () => {
    setQuestionsStatus((prev) => ({
      ...prev,
      [currentQuestion]: 'answered-and-marked',
    }));
  };

  const handleNext = () => {
    if (currentQuestion < 100) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const renderQuestionGrid = () => {
    const grid = [];
    for (let i = 1; i <= 100; i++) {
      const status = questionsStatus[i] || 'not-attempted';
      let bgColor = 'bg-gray-200';
      if (status === 'answered') bgColor = 'bg-green-500';
      if (status === 'not-attempted') bgColor = 'bg-red-500';
      if (status === 'marked') bgColor = 'bg-purple-500';
      if (status === 'answered-and-marked') bgColor = 'bg-purple-500';

      grid.push(
        <button
          key={i}
          className={`w-8 h-8 ${bgColor} text-white rounded-sm flex items-center justify-center text-sm ${
            i === currentQuestion ? 'border-2 border-black' : ''
          }`}
          onClick={() => setCurrentQuestion(i)}
        >
          {i}
        </button>
      );
    }
    return grid;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-4">
        <div className="text-xl font-bold">Ancient Indian History MCQ</div>
        <div className="flex items-center space-x-4">
          <span>Remaining Time: {formatTime(remainingTime)}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Log Out</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl flex space-x-4">
        {/* Question Section */}
        <div className="w-2/3 bg-white p-6 rounded-lg shadow">
          <div className="flex items-center space-x-2 mb-4">
            <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
              Read Comprehensive Paragraph
            </button>
          </div>
          <h2 className="text-lg font-semibold mb-4">
            1. Identify the site shown in the image below, which is one of the major urban centers of the Indus Valley Civilization.
          </h2>
          <div className="mb-4">
            <img
              src="https://via.placeholder.com/300x150"
              alt="Indus Valley Site"
              className="w-full max-w-md"
            />
          </div>
          <div className="mb-4">
            <p className="font-medium">Choose the answer:</p>
            {['A. Pataliputra', 'B. Harappa', 'C. Mohenjo-Daro', 'D. Lothal'].map((option, index) => (
              <div key={index} className="flex items-center space-x-2 mt-2">
                <input
                  type="radio"
                  name="option"
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                  className="w-5 h-5"
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleMarkForReview}
              className="bg-purple-600 text-white px-4 py-2 rounded"
            >
              Mark for Review
            </button>
            <button
              onClick={handlePrevious}
              className="bg-gray-300 text-black px-4 py-2 rounded"
              disabled={currentQuestion === 1}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </div>

        {/* Question Sheet */}
        <div className="w-1/3 bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Question Sheet</h3>
          <div className="grid grid-cols-10 gap-2">{renderQuestionGrid()}</div>
          <div className="flex justify-between mt-4 text-sm">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-green-500 mr-2"></span> Answered
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-500 mr-2"></span> Not Attempted
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-purple-500 mr-2"></span> Marked for Review
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-purple-500 mr-2"></span> Answered & Marked for Review
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}