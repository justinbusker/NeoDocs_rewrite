import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './SignUp.tsx'
import Login from './Login.tsx'
import Header from './Header.tsx'
import ProcessLogin from './ProcessLogin.tsx'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from './firebaseConfig.ts'

function App() {

  return (
    <>
			<Header />
			<Routes>
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
				<Route path="/" element={ <ProcessLogin><h1>test</h1></ProcessLogin>} />
			</Routes>
    </>
  )
}

export default App
