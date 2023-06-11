import { useState } from 'react';
import Game from './Game';

function App() {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(true);
  };
  const handleBack = () => {
    setPlay(false);
  };
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <div className="mb-4">
        {!play && (
          <button
            className=" border-cyan-500 border-2 bg-cyan-500 rounded-lg px-12 py-2 shadow-2xl hover:bg-cyan-600 text-white text-3xl font-bold w-96"
            onClick={handlePlay}
          >
            Fruit Bingo
          </button>
        )}
        {play && <Game onBack={handleBack} />}
      </div>
      {/*
       <div>
       {!play && (
        <button  className=' border-cyan-500 border-2 bg-cyan-500 rounded-lg px-12 py-2 shadow-2xl hover:bg-cyan-600 text-white text-3xl font-bold w-96' onClick={handlePlay}>Sudoko</button>
      )}
      
        </div>
       */}
    </div>
  );
}

export default App;
