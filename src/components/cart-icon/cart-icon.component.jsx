import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppinCartIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
    <div className='CartIcon' onClick={toggleCartHidden}>
        <ShoppinCartIcon className='shopping-cart-icon' />
        <span className='item-count'>{0}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);

