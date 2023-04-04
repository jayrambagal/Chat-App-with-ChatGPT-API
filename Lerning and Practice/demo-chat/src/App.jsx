import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Chat from './Components/Chat'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/chat' element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  
    </div>
  )
}

export default App
