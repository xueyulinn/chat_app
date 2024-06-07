import { Toaster } from 'react-hot-toast'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/homePage'
import LoginPage from './pages/login/loginPage'
import SignupPage from './pages/signup/signupPage'
import { useAuth } from './context/authContext'


function App() {

  const { user } = useAuth();

  return (
    <div className=' h-screen flex flex-col items-center justify-center'>
      <Routes>
        <Route path='/' element={user ? <HomePage /> : <Navigate to='/login' />} />
        <Route path='/login' element={!user ? <LoginPage /> : <Navigate to='/' />} />
        <Route path='/signup' element={!user ? <SignupPage /> : <Navigate to='/' />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
