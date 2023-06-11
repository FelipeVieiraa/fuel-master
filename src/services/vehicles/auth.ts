import { VehicleType } from 'src/types/vehicle';
import { delay } from 'src/utils';

import vehiclesMock from './mocks/vehicles.json';

export const getVehicles = async (userId: number): Promise<VehicleType[]> => {
	await delay(2000);
	return new Promise<VehicleType[]>((resolve) => {
		const vehicles = vehiclesMock.filter((it) => it.ownerId === userId);
		resolve(vehicles);
	});
};
