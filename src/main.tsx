import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import store from "./store"
import Companies from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
    <Provider store={store}>
      <Companies/>
    </Provider>
    </StrictMode>
)