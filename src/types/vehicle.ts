import { z } from 'zod';

export const vehicleSchema = z.object({
	id: z.number(),
	name: z.string(),
	licensePlate: z.string(),
	ownerId: z.number(),
});

export type VehicleType = z.infer<typeof vehicleSchema>;
