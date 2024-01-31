import { useState } from 'react'

import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}> 
     <h1 className='text-5xl font-bold '> Hello ,Haboub!</h1>
    </Provider>
  )
}

export default App
