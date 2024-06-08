import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from './context/authContext'
import { UserSelectedProvider } from './context/userSelectedContext.jsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UserSelectedProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserSelectedProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
