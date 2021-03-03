import React, { useEffect, useState } from 'react';

import * as Styles from './styles';

const _colors = ['#ABB8C3', '#FF6900', '#FCB900', '#008B02', '#0693E3', '#F78DA7', '#5300EB'];

const ColorPicker = ({
  color = '#ABB8C3', colors = _colors, onChange = false, disabled = false,
}) => {
  const [currentColor, setCurrentColor] = useState(color);

  useEffect(() => setCurrentColor(color), [color]);

  useEffect(() => {
    if (onChange) onChange(currentColor);
  }, [currentColor]);

  const handleOnChange = (_color) => {
    if (disabled) return;
    setCurrentColor(_color);
  };

  return (
    <Styles.Wrapper disabled={disabled}>

      {colors.map((_color) => (
        <Styles.ColorItem
          key={_color}
          className={currentColor === _color ? 'selected' : ''}
          onClick={() => handleOnChange(_color)}
          color={_color}
          disabled={disabled}
        />
      ))}

    </Styles.Wrapper>
  );
};

export default ColorPicker;
