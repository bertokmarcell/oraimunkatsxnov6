import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { TablazatProvider } from './contexts/TablazatContext'
import Konyvek from './components/Konyvek'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <header>Placeholder</header>
        <Konyvek/>
    </>
  )
}

export default App
