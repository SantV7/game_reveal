

const End = ({retryGame}) => {
  return (
    <>
     <h1>Fim de jogo</h1>
     <button className="retry-btn" onClick={retryGame}>Reiniciar jogo</button>
    </>
  )
}

export default End