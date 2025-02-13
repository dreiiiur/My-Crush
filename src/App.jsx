import React, { useEffect, useState } from 'react';

function App() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const audio = document.getElementById('valentine-audio');
    audio.play();
  }, []);

  const handleButtonClick = () => {
    setClicked(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 to-red-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
        <audio id="valentine-audio" src="songsong.mp3" autoPlay loop></audio>
        <div className="text-red-500 text-4xl animate-pulse mb-4 text-center">❤️</div>
        <h1 className="text-2xl font-bold mb-2 text-red-600 text-center">Happy Valentine's Day!</h1>
        <p className="text-gray-600 mb-4 italic">
          You're beautiful as a flower. Palagi mong galingan! Sana matupad lahat ng pangarap at mga gusto mo. 
          Wish you a day filled with love and happiness!🌸
        </p>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
            id="love-btn"
            onClick={handleButtonClick}
          >
            Click Me! 💌
          </button>
        </div>
        {clicked && <img src="flow.jpg" id="flowers-img" className="mt-4" alt="Flowers" />}
      </div>
    </div>
  );
}

export default App;

