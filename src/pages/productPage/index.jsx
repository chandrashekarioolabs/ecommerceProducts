import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductCard, Header, Footer } from 'Component';
import { getProducts, addproductToCart, userSignOut } from 'Redux/actions';
import { withRouter } from 'react-router-dom';
import './index.scss';
class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getProductList();
  }
  getProductList = () => {
    this.props.getProducts();
  };

  addtocart = (item) => {
    let data = [...this.props.cartProducts];
    item.qty = 1;
    let indexofItem = -1;
    data.some((items, index) => {
      if (items.id === item.id) {
        indexofItem = index;
        let qty = items.qty + item.qty;
        data[index] = { ...items, qty };
        return true;
      }
      return false;
    });
    if (indexofItem === -1) data.push(item);

    this.props.addproductToCart(data);
  };
  render() {
    return (
      <div>
        <Header
          cartValue={this.props.cartProducts.length}
          onCartClick={() => {
            this.props.history.push('/cart');
          }}
          signOut={() => {
            this.props.userSignOut();
          }}
        />
        <div className='productCardContainer'>
          {this.props.products.map((el) => (
            <ProductCard
              {...el}
              key={el.id}
              addToCart={() => this.addtocart(el)}
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

export default connect(mapPropsTOState, {
  getProducts,
  addproductToCart,
  userSignOut,
})(withRouter(ProductPage));
