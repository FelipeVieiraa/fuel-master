import { useContext } from 'react';
import { View } from 'react-native';

import { Card, Layout, Text } from '@ui-kitten/components';

import { Screen } from '@components';
import { LoginContext } from '@contexts';

import { spacingHorizontal, spacingVertical } from 'src/themes/metrics';

const Dashboard = () => {
	const { user, vehicle } = useContext(LoginContext);

	return (
		<Screen safe>
			<View style={{ alignItems: 'flex-start' }}>
				<Layout
					level="4"
					style={{
						paddingHorizontal: spacingHorizontal[2],
						paddingVertical: spacingHorizontal[1],
						borderTopRightRadius: 25,
						borderBottomRightRadius: 25,
					}}
				>
					<Text category="h6">{`${user.firstName} ${user.lastName}`}</Text>
				</Layout>
				<Layout
					level="3"
					style={{
						paddingHorizontal: spacingHorizontal[2],
						paddingVertical: spacingHorizontal[1],
						borderTopRightRadius: 25,
						borderBottomRightRadius: 25,
					}}
				>
					<Text category="s1">{vehicle.name}</Text>
				</Layout>
			</View>

			<View style={{ paddingHorizontal: spacingHorizontal[4] }}>
				<Card style={{ marginTop: spacingVertical[4] }}>
					<Text>Odômetro</Text>
					<Text>Total: 10000 km</Text>
					<Text>Média: 10 km/l</Text>
				</Card>

				<Card style={{ marginTop: spacingVertical[1] }}>
					<Text>Horímetro</Text>
					<Text>Total: 10000 h</Text>
					<Text>Média: 10 H/l</Text>
				</Card>

				<Card style={{ marginTop: spacingVertical[1] }}>
					<Text>Abastecimentos</Text>
					<Text>Total: 100 L</Text>
				</Card>
			</View>
		</Screen>
	);
};

export default Dashboard;
