import React, { useState } from 'react'
import AnswerInput from './AnswersInput'
import { CenterWrapper, Flag, Results } from '../styled'
import { shuffle } from '../helpers/shuffle'

const Game = props => {
  const [flags, setFlags] = useState(() => shuffle(props.flags))
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(props.attempts)

  const nextFlag = () => {
    setFlags(flags.length > 1 ? flags.slice(1) : shuffle(props.flags))
    setAttempts(props.attempts)
  }

  const onCorrect = () => {
    setScore(score + 1)
    nextFlag()
  }

  const onIncorrect = () => {
    if (attempts > 1) {
      setAttempts(attempts - 1)
      return
    }
    setScore(Math.max(0, score - 1))
    nextFlag()
  }

  const [{ name, emoji }] = flags

  return (
    <CenterWrapper>
      <Flag flag={emoji} />
      <AnswerInput
        answer={name}
        onCorrect={onCorrect}
        onIncorrect={onIncorrect}
      />
      <Results score={score} attempts={attempts} />
    </CenterWrapper>
  )
}

export default Game
