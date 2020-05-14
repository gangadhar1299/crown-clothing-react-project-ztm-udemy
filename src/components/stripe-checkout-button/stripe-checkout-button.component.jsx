import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-checkout-button.styles.scss';

const StripeCheckoutButoon = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Pb1paa0VgzfcDobFJKaL3zG4009cVXxIhj';

    const onToken = token => {
        console.log(token);
        alert("Payment successful");
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CROWN CLOTHING Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButoon;