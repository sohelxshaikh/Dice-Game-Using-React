import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {

  const [isGameStarted, SetIsGameStarted] = useState(false)

  const toogleGameplay = () => {
    SetIsGameStarted((prev) => !prev)
  }

  return (
    <>
      {
        isGameStarted ? <GamePlay toggle={toogleGameplay} /> : <StartGame toggle={toogleGameplay} />
      }
    </>
  )
}

export default App
