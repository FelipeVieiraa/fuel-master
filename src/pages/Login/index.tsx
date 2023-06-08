import { Form, Screen } from '@components';
import LottieView from 'lottie-react-native';

import sx from './styles';
import { Button, Input } from '@ui-kitten/components';

const Login = () => {
	return (
		<Screen level="1">
			<Form style={sx.form}>
				<LottieView
					source={require('src/assets/car.json')}
					style={sx.lottie}
					autoPlay
				/>
				<Input placeholder="E-mail" value="" />
				<Input style={sx.marginTop} placeholder="Senha" value="" />
				<Button style={sx.button}>Entrar</Button>
			</Form>
		</Screen>
	);
};

export default Login;
