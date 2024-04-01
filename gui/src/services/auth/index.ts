import api from '@/api';
import { UserInterface } from './interfaces';

interface ResponseAuth {
    access_token: string;
    user: UserInterface;
}

const authUser = async (username: string, password: string): Promise<ResponseAuth> => {
    const { data } = await api.post('/auth/login', {
        username,
        password
    });

    return data;
};

const userData = async (): Promise<UserInterface> => {
    const { data } = await api.get('/auth/profile');

    return data;
};

export { authUser, userData };
