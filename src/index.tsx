import React from 'react'
import ReactDOM from 'react-dom'

import { BaseApp } from 'config/app'
import { Routes } from 'routes'

ReactDOM.render(
  <React.StrictMode>
    <BaseApp>
      <Routes />
    </BaseApp>
  </React.StrictMode>,
  document.getElementById('root')
)
