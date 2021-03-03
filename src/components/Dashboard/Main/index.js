import React from 'react';

import * as Styles from './styles';

const Main = ({ breadcrumb, children }) => (
  <Styles.Main className="bg-white">

    <Styles.Header className="border-bottom">
      <nav aria-label="breadcrumb">
        <ol className="ms-3 breadcrumb">
          {breadcrumb.map((item, index) => (
            <li key={index} className="fs-5 breadcrumb-item">
              <a href={item?.url}>{item?.name}</a>
            </li>
          ))}
        </ol>
      </nav>
    </Styles.Header>

    <Styles.Container>
      {children}
    </Styles.Container>

  </Styles.Main>
);

export default Main;
