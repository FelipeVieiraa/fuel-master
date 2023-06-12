import { createContext, ReactNode, useState } from 'react';

import { UserType } from 'src/types/user';
import { VehicleType } from 'src/types/vehicle';

type LoginContextType = {
	user: UserType | null;
	setUser: (user: UserType) => void;
	vehicle: VehicleType | null;
	setVehicle: (vehicle: VehicleType) => void;
	isAuthenticated: boolean;
};

export const LoginContext = createContext<LoginContextType>(
	{} as LoginContextType
);

const LoginProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<UserType | null>(null);
	const [vehicle, setVehicle] = useState<VehicleType | null>(null);
	const isAuthenticated = !!user?.id;

	return (
		<LoginContext.Provider
			value={{
				user,
				isAuthenticated,
				setUser,
				vehicle,
				setVehicle,
			}}
		>
			{children}
		</LoginContext.Provider>
	);
};

export default LoginProvider;
