import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'

const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const routes = require('./routes/index').default()

  ReactDOM.render(
    <AppContainer routes={routes} />,
    MOUNT_NODE
  )
}

render()
