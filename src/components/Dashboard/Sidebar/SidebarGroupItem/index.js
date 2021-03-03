/* eslint-disable no-new */
import React from 'react';
// import React, { useState } from 'react';
import { useRouter } from 'next/router';

import * as Styles from './styles';

// const OpenIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     fill="currentColor"
//     className="bi bi-chevron-down"
//     viewBox="0 0 16 16"
//   >
//     <path
//       fillRule="evenodd"
//       d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
//     />
//   </svg>
// );

// const CloseIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     fill="currentColor"
//     className="bi bi-chevron-right"
//     viewBox="0 0 16 16"
//   >
//     <path
//       fillRule="evenodd"
//       d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
//     />
//   </svg>
// );

const Sidebar = ({ group, groupIndex, sidebarIsOpen }) => {
  const router = useRouter();

  // const [collapseIsOpen, setCollapseIsOpen] = useState(true);

  const handleOnClick = ({ pathname }) => (pathname ? router.push(pathname) : null);
  // const toggleCollapse = () => {
  //   const myCollapse = document.getElementById(`collapse-sidebar-${groupIndex}`);
  //   // eslint-disable-next-line no-undef
  //   new bootstrap.Collapse(myCollapse, { show: collapseIsOpen });
  //   setCollapseIsOpen((value) => !value);
  // };

  return (
    <Styles.ItemsContainer>
      {/* <Styles.GroupItemContainer onClick={toggleCollapse}>
        <div className="item-container">
          <div className="item-svg">
            {collapseIsOpen ? <OpenIcon /> : <CloseIcon />}
          </div>
          {sidebarIsOpen && <p>{group.name}</p>}
        </div>
      </Styles.GroupItemContainer> */}

      <div className="collapse show" id={`collapse-sidebar-${groupIndex}`}>
        {group.items.map((item, itemIndex) => {
          const isSelected = () => (router.pathname === item.pathname ? 'selected' : '');
          return (
            <Styles.ItemContainer
              key={itemIndex}
              className={`item ${isSelected()}`}
              onClick={() => handleOnClick(item)}
              aria-hidden="true"
            >
              <div className="item-container">
                {item.Icon()}
                {sidebarIsOpen && <p>{item.name}</p>}
              </div>
            </Styles.ItemContainer>
          );
        })}
      </div>

    </Styles.ItemsContainer>
  );
};

export default Sidebar;
