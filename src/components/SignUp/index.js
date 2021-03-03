import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Formik } from 'formik';

import * as Styles from './styles';

import ProfileIcon from '../../assets/icons/ProfileIcon';
import GithubIcon from '../../assets/icons/GithubIcon';

import { useAuthenticationContext } from '../../context/Authentication';
import { useToastContext } from '../../context/Toast';

const SingUp = () => {
  const router = useRouter();

  const toast = useToastContext();
  const { signUp } = useAuthenticationContext();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async ({ name, email, password }) => {
    setIsLoading(true);
    try {
      await signUp(name, email, password);
      router.push('/dashboard');
    } catch (error) {
      const options = {
        title: 'Algo não ocorreu como esperado',
        message: 'Verifique os seus dados e tente novamente.',
        type: 'error',
      };
      toast.show(options);
    }
    setIsLoading(false);
  };

  const handleSingUpGithub = () => {
    const title = 'Em breve';
    const message = 'O cadastro com o GitHub ainda não está disponível.';
    toast.show(title, message);
  };

  return (
    <Styles.SingUp>
      <Styles.Box className="shadow rounded border bg-white">
        <Styles.Header className="border-bottom">
          <ProfileIcon />
          <p className="fs-5">Cadastrar</p>
        </Styles.Header>

        <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
          {(form) => (
            <Styles.Form className="d-grid">
              <button type="button" className="mb-2 btn btn-dark" onClick={handleSingUpGithub}>
                <GithubIcon />
                Cadastrar com o GitHub
              </button>

              <p className="w-100 m-0 mb-2 text-center fw-light text-secondary">ou</p>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="name"
                  onChange={form.handleChange}
                  className="form-control"
                  placeholder="Digite seu nome"
                  disabled={isLoading}
                  required
                />
                <label>Nome completo</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  onChange={form.handleChange}
                  className="form-control"
                  placeholder="Digite seu email"
                  disabled={isLoading}
                  required
                />
                <label>Email</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  name="password"
                  onChange={form.handleChange}
                  className="form-control"
                  placeholder="Digite sua senha"
                  disabled={isLoading}
                  required
                />
                <label>Senha</label>
              </div>

              <button type="submit" className="mt-4 btn btn-primary" disabled={isLoading}>
                {isLoading
                  ? <div className="spinner-border spinner-border-sm" role="status" />
                  : <p className="m-0">Cadastrar</p>}
              </button>

              <p className="mt-4 w-100 text-center m-0 fw-light">
                {'Já possui uma conta? '}
                <a href="/login" className="fw-normal text-primary">Entrar</a>
              </p>
            </Styles.Form>
          )}
        </Formik>

      </Styles.Box>
    </Styles.SingUp>
  );
};

export default SingUp;
