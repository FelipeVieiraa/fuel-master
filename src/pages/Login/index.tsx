import LottieView from 'lottie-react-native';
import { Controller, useForm } from 'react-hook-form';

import { Form, Input, Screen } from '@components';

import sx from './styles';
import useLogin from './useLogin';
import Button from 'src/components/Button';
import { useTranslation } from 'react-i18next';

const Login = () => {
	const { t } = useTranslation();
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
							placeholder={t(field.name)}
							onChangeText={field.onChange}
							label={t(field.name)}
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
							placeholder={t(field.name)}
							onChangeText={field.onChange}
							label={t(field.name)}
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
