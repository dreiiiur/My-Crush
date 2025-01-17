import React, { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFFBCA] text-gray-800 font-mono">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#5B913B] mb-4 text-center">
        Hello Beautiful Hooman 💚
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center mb-6">
        Welcome to this exclusive website, made just for you!
      </p>

      {!clicked ? (
        <button
          onClick={handleButtonClick}
          className="px-4 sm:px-6 py-2 sm:py-3 text-md sm:text-lg font-semibold text-white bg-[#5B913B] rounded-lg shadow-md hover:bg-[#77B254] transition-all"
        >
          Click Me If You Like Me 🤍
        </button>
      ) : (
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#77B254] mt-6 text-center justify-center">
          I KNEW IT! You like me! 💚 <br /> Let's grab coffee sometime? ☕
        </h2>
      )}

      <footer className="mt-8 sm:mt-12 text-xs sm:text-sm text-gray-700">
        Made by yours truly, Andrei 💚
      </footer>
    </div>
  );
}

export default App;

