import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SIgnUp from '../../components/sign-up/sign-up.component';

import './sign-in-sign-up.styles.scss';

const SignInSignUp = () => (
    <div className='SignInSignUp'>
        <SignIn />
        <SIgnUp />
    </div>
)

export default SignInSignUp;