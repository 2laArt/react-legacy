import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { Provider } from 'react-redux'
import store from './store'
import { Main } from '@/pages/main'
ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<Main />
	</Provider>
)
