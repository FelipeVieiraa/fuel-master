import { View } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { Text } from '@ui-kitten/components';
import LottieView from 'lottie-react-native';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button, Form, Input, Screen } from '@components';

import Icon from 'src/components/Icon';
import { signInSchema } from 'src/types/auth';

import sx from './styles';
import useLogin from './useLogin';

const Login = () => {
	const { t } = useTranslation();
	const { signIn, defaultValues, loading } = useLogin();
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues,
		resolver: zodResolver(signInSchema),
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
					render={({ field, fieldState }) => (
						<Input
							placeholder={t(field.name)}
							onChangeText={field.onChange}
							label={t(field.name)}
							error={!!fieldState?.error?.message}
							{...field}
						/>
					)}
				/>
				<Controller
					name="password"
					control={control}
					render={({ field, fieldState }) => (
						<Input
							style={sx.marginTop}
							placeholder={t(field.name)}
							onChangeText={field.onChange}
							label={t(field.name)}
							error={!!fieldState?.error?.message}
							{...field}
						/>
					)}
				/>
				<Button
					style={sx.button}
					onPress={handleSubmit(signIn)}
					disabled={!!errors.email || !!errors.password}
					loading={loading}
				>
					{t('sign_in')}
				</Button>

				<View style={sx.errorsContainer}>
					{errors?.email && (
						<Text status="danger" category="s1">
							· {errors.email.message}
						</Text>
					)}
					{errors?.password && (
						<Text status="danger" category="s1">
							· {errors.password.message}
						</Text>
					)}
				</View>
			</Form>
		</Screen>
	);
};

export default Login;
