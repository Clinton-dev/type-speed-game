import {useState, useEffect, useRef} from 'react'

function startTypingGame(REMAINING_TIME=10) {

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

  return {count, word, remainingTime, handleWordChange, textAreaRef, isStart, startGame}

}

export default startTypingGame
