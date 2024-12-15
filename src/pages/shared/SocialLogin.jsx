import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                ('google signin done',result.user);

            })
            .catch(error => {
                (error.message);
            })
    }
    return (
        <div className='m-4 mx-auto'>
            <div className="divider ">OR</div>
            <button onClick={handleGoogleSignIn} className='text-pink-600 btn  btn-outline'>Google</button>
        </div>
    );
};

export default SocialLogin;