import { SignInType } from 'src/types/auth';
import { UserType } from 'src/types/user';
import { delay } from 'src/utils';

import usersMock from './mocks/users.json';

export const auth = async (props: SignInType): Promise<UserType> => {
	await delay(2000);
	const { email, password } = props;

	return new Promise<UserType>((resolve, reject) => {
		const user = usersMock.find((it) => it.email === email);

		if (!user) {
			reject('Usuário não encontrado.');
		}

		if (user.password === password) {
			resolve(user);
		}

		reject('Tente novamente mais tarde.');
	});
};
