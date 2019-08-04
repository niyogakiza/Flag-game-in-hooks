import React from 'react'
import ReactDOM from 'react-dom'
import Game from './components/Game'
import flags from './data/flags'

const rootElement = document.getElementById('root')
ReactDOM.render(<Game flags={flags} attempts={5} />, rootElement)
