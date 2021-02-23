import React from 'react';
import { useRouter } from 'next/router';
import { Formik } from 'formik';

import * as Styles from '../../SignUp/styles';

import PasswordIcon from '../../../assets/icons/PasswordIcon';

import { useToastContext } from '../../../context/Toast';

const Reset = () => {
  const router = useRouter();

  const toast = useToastContext();

  const handleChangePassword = ({ password, confirmPassword }) => {
    console.log(password, confirmPassword);

    const title = 'Senha alterada';
    const message = 'Sua senha foi alterada. Por favor, faça login novamente.';
    const type = 'success';
    toast.show(title, message, type);

    router.push('/login');
  };

  return (
    <Styles.SingUp>
      <Styles.Box className="shadow rounded border bg-white">
        <Styles.Header className="border-bottom">
          <PasswordIcon />
          <p className="fs-5">Redefinir senha</p>
        </Styles.Header>

        <Formik initialValues={{ password: '', confirmPassword: '' }} onSubmit={handleChangePassword}>
          {(form) => (
            <Styles.Form className="d-grid">
              <p className="mb-3 w-100 m-0 fw-light">
                Por favor, digite uma nova senha para sua conta.
              </p>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  name="password"
                  onChange={form.handleChange}
                  className="form-control"
                  placeholder="Digite sua senha"
                  required
                />
                <label>Nova senha</label>
              </div>

              <div className="form-floating mb-4">
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={form.handleChange}
                  className="form-control"
                  placeholder="Digite sua senha"
                  required
                />
                <label>Confirmar nova senha</label>
              </div>

              <button type="submit" className="btn btn-primary">Redefinir senha</button>
            </Styles.Form>
          )}
        </Formik>
      </Styles.Box>
    </Styles.SingUp>
  );
};

export default Reset;
