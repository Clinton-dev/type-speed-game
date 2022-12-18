import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const REMAINING_TIME = 15

  const [count, setCount] = useState(0)
  const [word, setWord] = useState("")
  const [remainingTime, setRemainingTime] = useState(REMAINING_TIME)
  const [isStart, setIsStart] = useState(false)
  const textAreaRef = useRef(null)


  const handleWordChange = (e) => {
    const {value} = e.target
    setWord(value)
  }


  const calculateWords = (text) => {
    let words = text.split(" ")
    let filteredWords= words.filter(word => (word != ""))
    return filteredWords.length
  }


  const startGame = () => {
    setIsStart(true)
    textAreaRef.current.disabled = false
    textAreaRef.current.focus()
    setWord("")
  }

  const endGame = () => {
    setIsStart(false)
    setCount(calculateWords(word))
    setRemainingTime(REMAINING_TIME)
  }


  useEffect(() => {
    // start Game
    if(remainingTime != 0 && isStart){
      setTimeout(() => {
        setRemainingTime(prevTime => prevTime - 1)
      }, 1000)
    } else if(remainingTime === 0) {
      endGame()
    }

  },[remainingTime,isStart])


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
