import { View } from 'react-native';

import { Spinner, Text } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';

import { Button, Screen } from '@components';

import { spacingHorizontal, spacingVertical } from 'src/themes/metrics';

import ListVehicleItem from './components/ListVehicleItem';
import sx from './styles';
import useVehicles from './useVehicles';

const SelectVehicle = () => {
	const { t } = useTranslation();
	const { vehicles, loading } = useVehicles();

	return (
		<Screen
			safe
			scrollEnabled
			level="1"
			style={{ paddingHorizontal: spacingHorizontal[4] }}
		>
			<Text category="h4" style={{ marginTop: spacingVertical[2] }}>
				{t('select_vehicle')}
			</Text>
			<View style={{ marginTop: spacingVertical[3] }}>
				{loading ? (
					<View style={sx.spinner}>
						<Spinner />
					</View>
				) : (
					vehicles.map((vehicle) => (
						<ListVehicleItem key={vehicle.id} style={sx.vehicleItem} />
					))
				)}

				<Button
					style={{ marginTop: spacingVertical[2] }}
					appearance="ghost"
					icon="plus-square-outline"
				>
					Registrar novo veículo
				</Button>
			</View>
		</Screen>
	);
};

export default SelectVehicle;
