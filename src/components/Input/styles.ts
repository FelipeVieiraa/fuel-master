import { StyleService } from '@ui-kitten/components';
import { spacingHorizontal } from 'src/themes/metrics';

export default StyleService.create({
	captionContainer: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
	},
	captionIcon: {
		height: 14,
		marginRight: 4,
		width: 14,
	},
	captionText: {
		color: '#8F9BB3',
		fontFamily: 'opensans-regular',
		fontSize: 12,
		fontWeight: '400',
	},
	colorError: {
		color: 'danger',
	},
	input: {},
	loadingContainer: {
		marginRight: spacingHorizontal[2],
	},
});
