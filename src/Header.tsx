import{useState} from 'react'
import { useAuth } from './AuthContext.tsx'
import {signOut } from 'firebase/auth'
import {auth} from './firebaseConfig.ts'

const Header: React.FC = () => {
	const [showMenu, setShowMenu] = useState(false)

	const { user, loading } = useAuth()

	const handleClick: void = () => {
		setShowMenu(!showMenu)
		console.log(showMenu)
		console.log(user)
	}

	const handleLogout: void = () => {
		signOut(auth).then(() => {
			//Signout worked
		}).catch((error) => {
			//error
		})
	}

	return (
		<header>
			<div className="flex flex-row justify-between">
			<h1 className="text-5xl ml-2 my-2 text-[#C4D7F2] glow">NeoDocs</h1>
				{user && (<div className="relative">
					<button className="cursor-pointer text-red-400 mr-2 mb-2 text-2xl border border-red-400 rounded-3xl p-1 " onClick={handleClick}><i class="fa-solid fa-user"></i></button>
					{showMenu && (
						<div className="bg-white rounded p-2 mr-2">
							<h1>{user.email}</h1>
							<button className="cursor-pointer" onClick={handleLogout}>Logout</button>
						</div>
					)
					}
				</div>
)}
							</div>
		</header>
	)
}

export default Header;
