import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Formik } from 'formik';

import * as Styles from '../../SignUp/styles';

import EmailIcon from '../../../assets/icons/EmailIcon';

const Reset = () => {
  const router = useRouter();

  const [title, setTitle] = useState('Esqueceu sua senha?');
  const [message, setMessage] = useState('Não se preocupe, vamos te mandar um email para te ajudar a redefinir sua senha.');
  const [isSent, setIsSent] = useState(false);

  const handleSendEmail = ({ email }) => {
    console.log(email);
    setIsSent((value) => !value);
    setTitle('Olhe seu email');
    setMessage('Nós te enviamos um email para te ajudar a redefinir sua senha. Lembre-se de olhar o seu lixo eletrônico caso não encontre.');
  };

  const handleDone = () => router.push('/login');

  return (
    <Styles.SingUp>
      <Styles.Box className="shadow rounded border bg-white">
        <Styles.Header className="border-bottom">
          <EmailIcon />
          <p className="fs-5">{title}</p>
        </Styles.Header>

        <Formik initialValues={{ email: '' }} onSubmit={handleSendEmail}>
          {(form) => (
            <Styles.Form className="d-grid">
              <p className="mb-4 w-100 m-0 fw-light">{message}</p>

              {!isSent && (
              <div className="form-floating mb-4">
                <input
                  type="email"
                  name="email"
                  onChange={form.handleChange}
                  className="form-control"
                  placeholder="Digite seu email"
                  required
                />
                <label>Email</label>
              </div>
              )}

              {!isSent
                ? <button type="submit" className="btn btn-primary">Continuar</button>
                : <button type="button" className="btn btn-primary" onClick={handleDone}>Feito</button>}

              {!isSent && (
              <p className="mt-4 w-100 m-0 fw-light">
                <a href="/login" className="fw-normal text-primary">Voltar</a>
              </p>
              )}
            </Styles.Form>
          )}
        </Formik>

      </Styles.Box>
    </Styles.SingUp>
  );
};

export default Reset;
