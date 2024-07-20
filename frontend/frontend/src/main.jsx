import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <div className='dark:bg-slate-900 dark:text-white'>
  <App/>
  </div>
  </BrowserRouter>
  
)
