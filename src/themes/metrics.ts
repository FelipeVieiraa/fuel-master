import { Dimensions, PixelRatio } from 'react-native';

export const responsiveWidth = (widthPercent: string) => {
	const screenWidth = Dimensions.get('window').width;
	return PixelRatio.roundToNearestPixel(
		(screenWidth * parseFloat(widthPercent)) / 100
	);
};

export const responsiveHeight = (heightPercent: string) => {
	const screenHeight = Dimensions.get('window').height;
	return PixelRatio.roundToNearestPixel(
		(screenHeight * parseFloat(heightPercent)) / 100
	);
};

export const spacingHorizontal = [
	responsiveWidth('1.1'),
	responsiveWidth('2.2'),
	responsiveWidth('4.4'),
	responsiveWidth('6.7'),
	responsiveWidth('8.9'),
];

export const spacingVertical = [
	responsiveHeight('0.7'),
	responsiveHeight('1.35'),
	responsiveHeight('2.7'),
	responsiveHeight('4.05'),
	responsiveHeight('5.4'),
];
