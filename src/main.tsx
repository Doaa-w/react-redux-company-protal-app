import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import store from "./store"
import App from './App'
import Companies from './companies'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
      <Companies/>
    </Provider>
)