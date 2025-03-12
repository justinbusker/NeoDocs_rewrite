import { auth } from './firebaseConfig.ts';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

const SignUp: React.FC = () => {


	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		createUserWithEmailAndPassword(auth, email, password)
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
			<form onSubmit={handleSignUp}>

				<label className="font-bold">Email</label>
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
				<button>Sign Up</button>
			</form>
		</>
	);

}

export default SignUp;
