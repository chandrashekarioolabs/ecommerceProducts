import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardCart, Header, Footer } from 'Component';
import { addproductToCart } from 'Redux/actions';
import { withRouter } from 'react-router-dom';
import './index.scss';

class CartPage extends Component {
  onAdd = (el, index) => {
    const data = [...this.props.cartProducts];
    let item = data[index];
    let qty = item.qty + 1;
    item.qty = qty;
    data[index] = item;

    this.props.addproductToCart(data);
  };
  onRemove = (el, index) => {
    const data = [...this.props.cartProducts];
    let item = data[index];
    let qty = item.qty - 1;
    if (qty === 0) {
      data.splice(index, 1);
    } else {
      item.qty = qty;
      data[index] = item;
    }

    this.props.addproductToCart(data);
  };
  getTotalPrice = () => {
    let totalPrice = 0;
    this.props.cartProducts.map((el) => {
      totalPrice += el.price * el.qty;
    });
    return totalPrice.toFixed(2);
  };
  render() {
    return (
      <div style={{ flex: 1 }}>
        <Header
          cartValue={this.props.cartProducts.length}
          homeClick={() => this.props.history.replace('/home')}
          signOut={() => {
            this.props.userSignOut();
          }}
        />

        <div className='cartPageContainer'>
          <div className='totalPrice'>
            <p className='totalPricestyle'>
              TotalPrice: ${this.getTotalPrice()}
            </p>
          </div>
          {this.props.cartProducts.map((el, index) => (
            <CardCart
              {...el}
              onAdd={() => this.onAdd(el, index)}
              onRemove={() => this.onRemove(el, index)}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapPropsTOState = (state) => {
  const { products = {} } = state || {};
  return { ...products };
};

export default connect(mapPropsTOState, { addproductToCart })(
  withRouter(CartPage)
);
