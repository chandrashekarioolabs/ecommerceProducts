import React from 'react';
import { TextInput, Button } from '..';
import styles from './loginCard.module.scss';

export default function LoginCard({
  emaidId,
  password,
  emailPlaceHolder,
  passwordPlaceHolder,
  emailErrorMessage,
  passwordErrorMessage,
  emailError,
  passwordError,
  emailLabel,
  passwordLabel,
  buttoonLabel,
  onEmailChange,
  onPasswordChange,
  onClick,
  ...props
}) {
  return (
    <div className={styles.loginCardContainer}>
      <TextInput
        label={emailLabel}
        errorText={emailErrorMessage}
        error={emailError}
        placeholder={emailPlaceHolder}
        value={emaidId}
        onChange={onEmailChange}
      />
      <TextInput
        label={passwordLabel}
        errorText={passwordErrorMessage}
        error={passwordError}
        placeholder={passwordPlaceHolder}
        value={password}
        onChange={onPasswordChange}
        type='password'
      />
      <Button buttonType='Secondary' label={buttoonLabel} onClick={onClick} />
    </div>
  );
}
