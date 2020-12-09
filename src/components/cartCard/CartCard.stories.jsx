import React from 'react';

import CardCart from '.';

export default {
  title: 'atoms/CardCart',
  component: CardCart,
  argTypes: {
    onRemove: { action: 'onRemove' },
    onAdd: { action: 'onAdd' },
  },
};

const Template = (args) => {
  return <CardCart {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: 'men clothing',
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  qty: '1',
};
