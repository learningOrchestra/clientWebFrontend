import React from 'react';
import { useRouter } from 'next/router';
import Particles from 'react-particles-js';
import { useWindowSize } from '@react-hook/window-size';

import * as Styles from './styles';

import params from './particlesjs-config.json';

const LandingPage = () => {
  const router = useRouter();
  const [width, height] = useWindowSize();

  const handleLogin = () => router.push('/login');
  const handleSignup = () => router.push('/signup');

  return (
    <Styles.Background className="bg-primary">
      <Particles
        width={width}
        height={height}
        params={params}
      />

      <nav className="navbar fixed-top navbar-dark" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
        <div className="container">

          <div className="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-share" viewBox="0 0 16 16">
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
            </svg>
            <p className="navbar-brand m-0 p-0 mx-4">Learning Orchestra</p>
          </div>

          <div className="d-flex align-items-center">
            <button type="button" className="btn btn-outline-light mx-2 signup" onClick={handleSignup}>Cadastrar</button>
            <button type="button" className="btn btn-light" onClick={handleLogin}>Entrar</button>
          </div>
        </div>
      </nav>

      <div className="bg-dark" style={{ position: 'relative' }}>

        <div className="d-flex justify-content-center w-100" style={{ position: 'absolute', bottom: 0 }}>
          <div className="container p-0">
            <div className="card p-2 rounded-0">
              <div className="card-body">
                <div>
                  <h5 className="card-title">Tudo que você precisa para ser mais produtivo</h5>
                  <p className="card-text">Workflows visuais para executar todas as sua tarefas de aprendizado de máquina e mineração de dados, de forma simples.</p>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSignup}>
                  Criar minha conta
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Styles.Background>
  );
};

export default LandingPage;
