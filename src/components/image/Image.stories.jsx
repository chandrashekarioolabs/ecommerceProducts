import React from 'react';
import Image from './';

export default {
  title: 'atoms/Image',
  component: Image,
};

const Template = (args) => {
  return <Image {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  src: 'https://fakestoreapi.com/icons/intro.svg',
};
