import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './SignUp.tsx'
import Header from './Header.tsx'

function App() {

  return (
    <>
			<Header />
			<SignUp />
    </>
  )
}

export default App
