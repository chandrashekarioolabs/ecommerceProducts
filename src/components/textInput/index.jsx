import React from 'react';
import './TextInput.scss';

export default function TextInput({
  error,
  errorText,
  label,
  onChange,
  className,
  value,
  ...props
}) {
  return (
    <div className={`inputContainer `}>
      <p className='label'>{label}</p>
      <input
        className={`textInput ${error ? 'borderError' : ''} ${className}`}
        onChange={onChange}
        value={value}
        {...props}
      />
      <p className='errorStyle'>{error ? errorText : ''}</p>
    </div>
  );
}
