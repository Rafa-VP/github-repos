import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './queryClient'
import { Container, NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>

        <App />

      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
