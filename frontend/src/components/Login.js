import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId =
    '502300402391-h01ncnoei9bvn8mu2gmfqu8kictv46e4.apps.googleusercontent.com';

const Login = (props) => {
    const onSuccess = (res) => {
        props.setSignedIn(true);
        //console.log('Login success! currentUser:', res.profileObj);
    };
    const onFailure = (res) => {
        console.log('Login failure! res:', res);
    };
    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    );
};

export default Login;
