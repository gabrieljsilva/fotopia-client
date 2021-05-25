import React from 'react'
import ReactDOM from 'react-dom'

import { BaseApp } from 'config/app'
import { Routes } from 'routes'

ReactDOM.render(
  <BaseApp>
    <Routes />
  </BaseApp>,
  document.getElementById('root')
)
