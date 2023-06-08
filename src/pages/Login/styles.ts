import { StyleSheet } from 'react-native';
import {
	responsiveHeight,
	spacingHorizontal,
	spacingVertical,
} from 'src/themes/metrics';

export default StyleSheet.create({
	lottie: {
		height: responsiveHeight('45'),
		maxWidth: 400,
		alignSelf: 'center',
	},
	marginTop: {
		marginTop: 18,
	},
	form: {
		paddingHorizontal: spacingHorizontal[3],
		maxWidth: 480,
	},
	button: {
		marginTop: spacingVertical[4],
		maxWidth: 480,
	},
});
