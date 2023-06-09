import LottieView from 'lottie-react-native';
import { Controller, useForm } from 'react-hook-form';

import { Form, Input, Screen } from '@components';

import sx from './styles';
import useLogin from './useLogin';
import Button from 'src/components/Button';

const Login = () => {
	const { signIn, defaultValues, loading } = useLogin();
	const { handleSubmit, control } = useForm({
		defaultValues,
	});

	return (
		<Screen level="1">
			<Form style={sx.form}>
				<LottieView
					source={require('src/assets/car.json')}
					style={sx.lottie}
					autoPlay
				/>
				<Controller
					name="email"
					control={control}
					render={({ field }) => (
						<Input
							placeholder="E-mail"
							onChangeText={field.onChange}
							{...field}
						/>
					)}
				/>
				<Controller
					name="password"
					control={control}
					render={({ field }) => (
						<Input
							style={sx.marginTop}
							placeholder="Senha"
							onChangeText={field.onChange}
							{...field}
						/>
					)}
				/>
				<Button
					style={sx.button}
					onPress={handleSubmit(signIn)}
					loading={loading}
				>
					Entrar
				</Button>
			</Form>
		</Screen>
	);
};

export default Login;
