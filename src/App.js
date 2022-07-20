import { useState } from "react";
import Game from "./Game";

  function App() {
    const [play , setPlay] = useState(false)

    const handlePalay = () =>{
      setPlay(true)
    }
    return (
    <div className="">
            <button className={play ? "hidden":' border-cyan-500 border-2 bg-cyan-500 rounded-lg px-12 py-2 shadow-2xl hover:bg-cyan-600 text-white text-3xl font-bold mt-96'} onClick={handlePalay}>play</button>
      {play && <Game />}
    
    </div>
  );
}

export default App;
