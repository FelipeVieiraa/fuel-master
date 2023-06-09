import { useContext, useState } from 'react';

import { LoginContext } from 'src/contexts/LoginProvider';
import { auth } from 'src/services/login/auth';
import { SignInType } from 'src/types/auth';

const useLogin = () => {
	const { setUser } = useContext(LoginContext);
	const [defaultValues] = useState({
		email: '',
		password: '',
	});
	const [loading, setLoading] = useState(false);

	const signIn = async (credentials: SignInType) => {
		try {
			setLoading(true);
			const user = await auth(credentials);
			setUser(user);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return { signIn, defaultValues, loading };
};

export default useLogin;
