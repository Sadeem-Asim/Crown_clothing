import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux/es/exports';

import { ReactComponent as Logo } from '..//..//assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';

import './header-styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createCartHidden } from '../../redux/cart/cart.reselect';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      {/* <Link className="option" to="/shop">
        SHOP
      </Link> */}

      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: createCartHidden,
});

export default connect(mapStateToProps)(Header);
