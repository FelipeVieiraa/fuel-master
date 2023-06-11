import { View } from 'react-native';

import { Card, CardProps, Text } from '@ui-kitten/components';

import { Button } from '@components';

type ListVehicleItemProps = CardProps;

const ListVehicleItem = (props: ListVehicleItemProps) => {
	return (
		<Card {...props}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<View style={{ flex: 1 }}>
					<Text category="h6">BMW X1</Text>
					<Text category="s1" style={{ marginTop: 4 }}>
						BMXJ-4012
					</Text>
				</View>
				<View>
					<Button size="small">Selecionar</Button>
				</View>
			</View>
		</Card>
	);
};

export default ListVehicleItem;
