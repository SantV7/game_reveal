

const Game = ({verifyLetter, letter}) => {
  return (
    <>
    <h1>Game</h1>
    <div className="flex-row">
      {letter.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
    <button onClick={verifyLetter}>Finalizar jogo</button>

    </>
  )
}

export default Game