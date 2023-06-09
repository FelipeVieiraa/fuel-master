import { ReactNode, createContext, useState } from 'react';
import { UserType } from 'src/types/user';

type LoginContextType = {
	user: UserType | null;
	setUser: (user: UserType) => void;
	isAuthenticated: boolean;
};

export const LoginContext = createContext<LoginContextType>(
	{} as LoginContextType
);

const LoginProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<UserType | null>(null);
	const isAuthenticated = !!user?.id;

	return (
		<LoginContext.Provider
			value={{
				user,
				isAuthenticated,
				setUser,
			}}
		>
			{children}
		</LoginContext.Provider>
	);
};

export default LoginProvider;
