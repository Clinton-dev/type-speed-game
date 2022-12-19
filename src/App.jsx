import startTypingGame from '../hooks/usestartGame'
import './App.css'

function App() {
  const {count, word, remainingTime, handleWordChange, textAreaRef, isStart, startGame} = startTypingGame()

  return (
    <div className="App">
      <h1>Test your typing speed</h1>
      <textarea
        value={word}
        onChange={handleWordChange}
        disabled={!isStart}
        ref={textAreaRef}
      />
      <h4>Time left: {remainingTime}</h4>
      <button disabled={isStart} onClick={startGame}>start</button>
      <h1>word count: {count}</h1>

    </div>
  )
}

export default App
