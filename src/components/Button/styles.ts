import { StyleService } from '@ui-kitten/components';

import { responsiveWidth } from 'src/themes/metrics';

export default StyleService.create({
	button: {
		minWidth: responsiveWidth('25'),
	},
	roundedButton: {
		minWidth: 'auto',
		borderRadius: 100,
		width: 45,
		height: 45,
	},
});
