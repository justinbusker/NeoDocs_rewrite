import { auth } from './firebaseConfig.ts';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

const Login: React.FC = () => {


	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed up 
				const user = userCredential.user;
				console.log(`Created new user ${user}`)
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	}

	
	return (
		<>
			<form onSubmit={handleLogin}>

				<label>Email</label>
				<input
					type="text" 
					value={email}
					onChange = { (e) => setEmail(e.target.value)}
					placeholder = "john@example.com"
				/>

				<label>Password</label>
				<input
					type="password"
					value={password}
					onChange = { (e) => setPassword(e.target.value)}
					placeholder = "*****"
				/>
				<button>Login</button>
			</form>
		</>
	);

}

export default Login;
