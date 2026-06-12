import { useState } from "react"
import './assets/styles/global.css'

function App() {

  const stages = [
    {id: 1, gameStage: 'start'},
    {id: 2, gameStage: 'game'},
    {id: 3, gameStage: 'end'},
  ]

  const [running, setRunning] = useState(stages[0].gameStage)


  return (
    <>
    <div className="app-center">
      {running === 'start' && }
      {running === 'game' && }
      {running === 'end' && }
    </div>
      
    </>
  )
}

export default App
