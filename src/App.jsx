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

  const [words] = useState(wordsList)

  const [selectedWord, setSelectedWord] = useState('')

  const [selectedCategory, setSelectedCategory] = useState('')

  const [letter, setLetter] = useState([])

  const [running, setRunning] = useState(stages[0].gameStage)


  function selectWordAndCategory () {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const wordMain = words[category][Math.floor(Math.random() * Object.keys(categories).length)]
      return {category, wordMain}
  }


  const startingGame = () => {
    const { category, wordMain } = selectWordAndCategory()

    let wordLetter = wordMain.toLowerCase().split('')

    console.log(wordLetter)

    console.log(`Categoria: ${category}: palavra a se revelar: ${wordMain}`)
    setRunning(stages[1].gameStage)
  }

  const verifyLetter = () => {
    setRunning(stages[2].gameStage)
  }

  const retryGame = () => {
    setRunning(stages[0].gameStage)
  }




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
