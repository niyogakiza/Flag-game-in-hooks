import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { normalise } from './helpers/normalise'
import { placeholder } from './helpers/placeholder'
import { Form, Placeholder, HiddenInput } from './styled'

const AnswerInput = ({ answer, onCorrect, onIncorrect, ...props }) => {
  const [value, setValue] = useState('')

  useEffect(() => setValue(), [answer])

  const handleChange = event => {
    setValue(normalise(event.target.value))
  }

  const handleSubmit = event => {
    event.preventDefault()
    value === normalise(answer) ? onCorrect() : onIncorrect()
    setValue('')
    return
  }

  const placeholderText = useMemo(() => placeholder(value, answer), [
    value,
    answer
  ])

  const maxLength = useMemo(() => normalise(answer).length, [answer])

  return (
    <Form onSubmit={handleSubmit}>
      <HiddenInput
        onChange={handleChange}
        value={value}
        maxLength={maxLength}
        autoFocus
      />
      <Placeholder>{placeholderText}</Placeholder>
    </Form>
  )
}

AnswerInput.propTypes = {
  answer: PropTypes.string,
  onCorrect: PropTypes.func,
  onIncorrect: PropTypes.func
}
export default AnswerInput
