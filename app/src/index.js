import React from 'react'
import { render } from 'react-dom'
import AppState from './AppState'
import App from './App'
import './index.css'

const data = new AppState()

render(
	<App data={data} />,
	document.getElementById('root')
)