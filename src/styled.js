import React from 'react'
import styled from 'styled-components'

export const Form = styled.form`
  margin-bottom: 1em;
`
export const Placeholder = styled.span`
  font-family: 'Courier New', Courier, monospace;
  padding: 0 0 0.3em 0.2em;
  font-size: 2em;
  letter-spacing: 0.2em;
`
export const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  caret-color: transparent;
  &:focus + ${Placeholder} {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  }
`
export const CenterWrapper = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
`

export const Flag = styled(({ flag, ...props }) => (
  <div {...props}>{flag}</div>
))`
  font-size: 5em;
  line-height: 1em;
  padding: 0;
  margin: 0;
`

export const Results = styled(({ score, attempts, ...props }) => (
  <div {...props}>
    Score: <span>{score}</span>, Attempts: <span>{attempts}</span>
  </div>
))`
  display: block;
  font-size: 1.5em;
  span {
    font-weight: bold;
  }
`
