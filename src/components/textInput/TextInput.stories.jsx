import React from 'react';

import TextInput from '.';

export default {
  title: 'atoms/TextInput',
  component: TextInput,
  argTypes: {
    onChange: {
      action: 'changed',
    },
  },
};
const Template = (args) => {
  return <TextInput {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  label: 'Title',
  errorText: 'Please add Title',
  error: true,
  value: 'Hello there',
};
