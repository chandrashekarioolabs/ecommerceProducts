import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default {
  title: 'atoms/NavBar',
  component: Header,
  argTypes: {
    onCartClick: {
      action: 'onCartClick',
    },
    signOut: {
      action: 'signOut',
    },
    cartValue: {
      type: 'string',
    },
    homeClick: {
      action: 'homeClick',
    },
  },
};

const Template1 = (args) => {
  return <Header {...args} />;
};
const Template2 = (args) => {
  return <Footer {...args} />;
};

export const header = Template1.bind({});
export const footer = Template2.bind({});
