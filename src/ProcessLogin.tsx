import { onAuthStateChanged } from "firebase/auth"
import { auth } from './firebaseConfig.ts'
import { useAuth } from './AuthContext.tsx'
import { Navigate } from 'react-router-dom'


interface PrivateRouteProps {
  children: React.ReactNode;
}

const ProcessLogin: React.FC<PrivateRouteProps> = ({children}) => {
	const {user, loading} = useAuth();

	console.log(user)
	if (loading) {
		return <div>Loading...</div>;
	}
	if (!user) {
		return <Navigate to="/login" replace/> 
	}

	return <>{children}</>
	
}

export default ProcessLogin;
