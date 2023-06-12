import { useContext } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Card, CardProps, Text } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';

import { Button } from '@components';
import { LoginContext } from '@contexts';

import { CompositeNavigations } from 'src/routes/AppRoutes';
import { VehicleType } from 'src/types/vehicle';

type ListVehicleItemProps = CardProps & {
	vehicle: VehicleType;
};

const ListVehicleItem = ({ vehicle, ...rest }: ListVehicleItemProps) => {
	const { t } = useTranslation();
	const { navigate } = useNavigation<CompositeNavigations>();
	const { setVehicle } = useContext(LoginContext);

	const selectVehicle = () => {
		setVehicle(vehicle);
		navigate('Dashboard');
	};

	return (
		<Card {...rest} onPress={selectVehicle}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<View style={{ flex: 1 }}>
					<Text category="h6">{vehicle.name}</Text>
					<Text category="s1" style={{ marginTop: 4 }}>
						{vehicle.licensePlate}
					</Text>
				</View>
				<View>
					<Button size="small" onPress={selectVehicle}>
						{t('select')}
					</Button>
				</View>
			</View>
		</Card>
	);
};

export default ListVehicleItem;
