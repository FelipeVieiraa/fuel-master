import { SvgCss, SvgProps } from 'react-native-svg';

import { wheel } from './functions';

const iconXml = {
	wheel,
};

type IconProps = SvgProps & {
	name: 'wheel';
};

const Icon = ({ name, ...rest }: IconProps) => {
	return <SvgCss xml={iconXml[name]} height={50} width={50} {...rest} />;
};

export default Icon;
