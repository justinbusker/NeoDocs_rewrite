import { useState } from 'react'
import { Routes, Route } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './SignUp.tsx'
import Header from './Header.tsx'

function App() {

	const [user, setUser] = useState(null)


  return (
    <>
			<Header />
			<Routes>
				<Route path="/signup" element={<SignUp />} />
			</Routes>
    </>
  )
}

export default App
