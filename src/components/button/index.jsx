import React from 'react';
import './Button.scss';

export default function MainButton({
  label,
  buttonType,
  buttonSize,
  onClick,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`button button_${buttonType} button_${buttonSize}`}
      {...props}>
      {label}
    </button>
  );
}
MainButton.defaultProps = {
  label: 'Button',
  buttonType: 'Primary',
  buttonSize: 'Large',
};
