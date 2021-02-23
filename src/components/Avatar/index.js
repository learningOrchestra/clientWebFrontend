import React, { useEffect, useRef } from 'react';

import * as Styles from './styles';

const colours = [
  '#5a876f', '#e8858c', '#408abb', '#e98435',
  '#da4d37', '#a5b12e', '#f1af29', '#9c89b4',
];

const Avatar = ({ size = 40, ...rest }) => {
  const AvatarRef = useRef(null);

  useEffect(() => {
    const { current } = AvatarRef;
    if (!current || current.src) return;

    const text = current.getAttribute('alt');
    const initial = text[0].toUpperCase();
    const colourIndex = text.split('').reduce((accumulator, letter) => {
      if (typeof accumulator !== 'number') return letter.charCodeAt(0);
      return (accumulator + letter.charCodeAt(0)) % 8;
    });

    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');

    context.fillStyle = colours[colourIndex - 1];
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = `${Math.round(canvas.width / 2)}px Arial`;
    context.textAlign = 'center';
    context.fillStyle = '#FFF';
    context.fillText(initial, size / 2, size / 1.5);

    const dataURI = canvas.toDataURL();
    current.src = dataURI;
  }, []);

  return <Styles.Avatar ref={AvatarRef} size={size} {...rest} />;
};

export default Avatar;
