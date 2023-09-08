import { useState } from 'react'
import Navbar from './components/Navbar';
import Main from './components/Main';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Cabecera</div>
        <div>
          <Navbar />
        </div>
        <Main />
        <div></div>
        <div>footer</div>
        <div>copyright</div>
    </>
  )
}

export default App
