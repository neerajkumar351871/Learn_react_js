import React, { useState } from 'react';

function TextFields({ handleonChange }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    if (handleonChange) handleonChange(e);
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const clearText = () => {
    setText('');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 text-center">Enter the Task</h1>

      <textarea
        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        rows="8"
        value={text}
        onChange={handleChange}
        placeholder="Type your task here..."
      ></textarea>

      <div className="flex flex-wrap justify-center gap-4">
        <button onClick={toLowerCase} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Convert to Lowercase
        </button>
        <button onClick={toUpperCase} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Convert to Uppercase
        </button>
        <button onClick={clearText} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
          Clear Text
        </button>
      </div>
    </div>
  );
}

export default TextFields;
