import React from 'react';
import LoginCard from './';

export default {
  title: 'atoms/LoginCard',
  component: LoginCard,
  argTypes: {
    onClick: {
      action: 'onClick',
    },
    onEmailChange: {
      action: 'onEmailChange',
    },
    onPasswordChange: {
      action: 'onPasswordChange',
    },
  },
};

const Template = (args) => {
  return <LoginCard {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  emaidId: '',
  password: '',
  emailPlaceHolder: 'example@gmail.com',
  passwordPlaceHolder: '*********',
  emailErrorMessage: 'Please Provide email id!!!',
  passwordErrorMessage: 'Please provide password!!!',
  emailError: false,
  passwordError: false,
  emailLabel: 'Email Id',
  passwordLabel: 'Password',
  buttoonLabel: 'Sign up',
};
