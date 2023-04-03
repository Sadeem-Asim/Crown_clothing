import React from 'react';
import { connect } from 'react-redux';

import './checkout.styles.scss';

import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart-action';
const CheckoutPage = ({ cartItems, total, clearItem }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>

      <div className="header-block">
        <span>Description</span>
      </div>

      <div className="header-block">
        <span>Quantity</span>
      </div>

      <div className="header-block">
        <span>Price</span>
      </div>

      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>

    {/* <div className="test-warning">
      *Please Use the following card number and expiry to create a payment*
      <br />
      4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
    </div> */}
    <button
      className="btn btn-primary"
      onClick={() => {
        alert(`${total}$ Payment Successful`);

        cartItems.forEach((cartItem) => {
          clearItem(cartItem);
        });
      }}
    >
      Pay now
    </button>
    {/* <StripeCheckoutButton price={total} /> */}
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
