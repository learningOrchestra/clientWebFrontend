import React from 'react';

import * as Styles from './styles';

const Main = ({ title, children }) => (
  <Styles.Main className="bg-white">

    <Styles.Header className="border-bottom">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {/* <li className="fs-5 breadcrumb-item">
              <a href="#">Home</a>
            </li> */}
          <li className="fs-5 breadcrumb-item active" aria-current="page">{title}</li>
        </ol>
      </nav>
    </Styles.Header>

    <Styles.Container>
      {children}
    </Styles.Container>

  </Styles.Main>
);

export default Main;
