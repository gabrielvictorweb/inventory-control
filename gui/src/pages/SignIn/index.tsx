import React from 'react';
import * as S from './styles';
import useUser from '@/hooks/useUser';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components';

interface InitialValues {
    username: string;
    password: string;
}

export const SignIn: React.FC = () => {
    const { auth } = useUser();
    const navigate = useNavigate();

    const handleAuth = async (values: InitialValues) => {
        const user = await auth(values.username, values.password);

        if (user && user.typeId === 2) {
            navigate('/');
        } else if (user && user.typeId === 1) {
            navigate('/dashboard');
        }
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => {
            handleAuth(values)
        },
    });

    return (
        <S.Container>
            <S.Title>Login</S.Title>
            <S.Description>Utilize seu cadastro para acessar o sistema!</S.Description>

            <form onSubmit={formik.handleSubmit}>
                <input id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                <input id="password"
                    name="password"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />

                <Button text="ENTRAR" />
            </form>
        </S.Container>
    );
};
