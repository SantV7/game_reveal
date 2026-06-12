import { useState } from "react"
import './assets/styles/global.css'
import StartGame from "./components/StartGame"
import Game from "./components/Game"
import End from "./components/End"
import { wordsList } from "./components/words/words"
function App() {

  const stages = [
    {id: 1, gameStage: 'start'},
    {id: 2, gameStage: 'game'},
    {id: 3, gameStage: 'end'},
  ]

  const [running, setRunning] = useState(stages[0].gameStage)

  const startingGame = () => {
    setRunning(stages[1].gameStage)
  }

  const verifyLetter = () => {
    setRunning(stages[2].gameStage)
  }

  const retryGame = () => {
    setRunning(stages[1].gameStage)
  }

  const [words] = useState(wordsList)


  return (
    <>
    <div className="app-center">
      {running === 'start' && <StartGame starting={startingGame} /> }
      {running === 'game' && <Game verifyLetter={verifyLetter}/>}
      {running === 'end' && <End  retryGame={retryGame}/>}
    </div>
      
    </>
  )
}

export default App
