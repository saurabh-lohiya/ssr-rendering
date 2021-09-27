import React from 'react'
import { render } from 'react-dom'
import App from './App'
import getFacts from './fatch'

getFacts().then(facts => {
  render(<App facts={facts} />, document.querySelector('#root'))
})