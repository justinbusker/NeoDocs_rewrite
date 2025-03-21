import { auth } from './firebaseConfig.ts';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const SignUp: React.FC = () => {


	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [alert, setAlert] = useState(false)
	const [alertMessage, setAlertMessage] = useState("")
	const navigate = useNavigate()

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
				console.log(errorCode)

				switch (errorCode){
					case "auth/invalid-email":
						setAlertMessage("Invalid email address!")
						break;
					case "auth/email-already-in-use":
						setAlertMessage("Email is already in use!")
						break;
				}

				setAlert(true)

			});
	}

	
	return (
		<>
			<form onSubmit={handleSignUp}>

				<div className=" flex flex-col ml-2 border-lime-400 border-l-2 ">
				<label className="ml-2 text-xl font-bold text-[#AFDEDC]">Email</label>
				<input
					type="text" 
					value={email}
					onChange = { (e) => setEmail(e.target.value)}
					placeholder = "john@example.com"
					className = "ml-2 mb-1 border text-white rounded-md w-[20vw]"
				/>

				<label className="ml-2 mb-1 font-bold text-[#AFDEDC]">Password</label>
				<input
					type="password"
					value={password}
					onChange = { (e) => setPassword(e.target.value)}
					placeholder = "*****"
					className = "ml-2 mb-1 border text-white rounded-md w-[20vw]"
				/>

				<button className = "cursor-pointer ml-2 mb-1 border border-white rounded-md text-[#AFDEDC] font-bold w-[20vw]">Sign Up</button>
					<p className=" ml-2 text-white">Have an account? <button className="cursor-pointer" onClick={() => navigate("/login")}>Login here</button></p>
				{alert && (
					<label className="text-red-400 ml-2 font-bold">{alertMessage}</label>
				)}
				</div>
			</form>
		</>
	);
}

export default SignUp;
