import { StyleSheet } from 'react-native';

import { spacingVertical } from 'src/themes/metrics';

export default StyleSheet.create({
	vehicleItem: {
		marginTop: spacingVertical[1],
	},
	spinner: {
		alignSelf: 'center',
		paddingVertical: spacingVertical[2],
	},
});
