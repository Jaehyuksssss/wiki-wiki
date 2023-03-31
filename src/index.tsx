import { Amplify } from 'aws-amplify'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import awsconfig from './aws-exports'
const rootEl = document.getElementById('root')

Amplify.configure(awsconfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootEl,
)
