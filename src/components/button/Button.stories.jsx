import React from 'react';

import MainButton from '.';

export default {
  title: 'atoms/MainButton',
  component: MainButton,
  argTypes: {
    buttonType: {
      control: { type: 'select', options: ['Primary', 'Secondary'] },
    },
    buttonSize: {
      control: { type: 'select', options: ['Large', 'Small'] },
    },
    onClick: {
      action: 'onClick',
    },
  },
};

const Template = (args) => {
  return <MainButton {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Continue',
};
