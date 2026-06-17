import { useState } from "react"

const Game = ({ verifyLetter, letter, category }) => {
  const [inputLetter, setInputLetter] = useState('')
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])

  function verificarInclude() {
    const normalizedLetter = inputLetter.toLowerCase().trim()

    if (!normalizedLetter) return

    if (letter.includes(normalizedLetter)) {
      if (!guessedLetters.includes(normalizedLetter)) {
        setGuessedLetters([...guessedLetters, normalizedLetter])
      }
    } else {
      if (!wrongLetters.includes(normalizedLetter)) {
        setWrongLetters([...wrongLetters, normalizedLetter])
      }
    }

    setInputLetter('')
  }

  return (
    <>
      <h1>Game</h1>

      <h2>Adivinhe a palavra</h2>
      <h3>Tema: {category}</h3>
      <p>
        <span>Pontuação: 000</span>
      </p>

      <div>
        <p style={{ marginTop: '10px', marginBottom: '13px', fontWeight: '600' }}>Letras já usadas: </p>
        <span style={{ backgroundColor: 'gray', padding: '10px', color: 'white', fontSize: '1.2rem' }}>
          {wrongLetters.join(', ')}
        </span>
      </div>

      <div className="flex-row">
        {letter.map((item, index) => (
          <div key={index}>
            <div className={guessedLetters.includes(item) ? 'div_letter_show' : 'div_letter_none'}>
              {guessedLetters.includes(item) ? item : '_'}
            </div>
          </div>
        ))}
      </div>

      <input 
        value={inputLetter} 
        onChange={(event) => setInputLetter(event.target.value)} 
        className="input_letter" 
        type="text" 
        maxLength={1} 
        placeholder="Letra aqui" 
      />

      <button id="verifyL" onClick={verificarInclude}>Verificar</button>
      <button onClick={verifyLetter}>Finalizar jogo</button>
    </>
  )
}

export default Game