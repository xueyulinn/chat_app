import { useState } from 'react'
import LoginPage from './pages/login/loginPage'
import SignupPage from './pages/signup/signupPage'
import HomePage from './pages/home/homePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' h-screen flex flex-col items-center justify-center'>
      <HomePage />
    </div>
  )
}

export default App
