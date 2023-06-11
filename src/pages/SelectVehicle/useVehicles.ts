import { useContext, useEffect, useState } from 'react';

import { LoginContext } from 'src/contexts/LoginProvider';
import { getVehicles } from 'src/services/vehicles/auth';

const useVehicles = () => {
	const { user } = useContext(LoginContext);
	const [vehicles, setVehicles] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		loadVehicles(user.id);
	}, []);

	const loadVehicles = async (userId: number) => {
		try {
			setLoading(true);
			const dataVehicles = await getVehicles(userId);
			setVehicles(dataVehicles);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return { vehicles, loading };
};

export default useVehicles;
