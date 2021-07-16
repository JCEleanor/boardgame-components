import React from 'react'
import GoogleLogin from 'react-google-login'

const responseGoogle = (response) => {
  console.log(response)
}

const GoogleAuth = () => {
  ;<GoogleLogin
    clientId="1054065807793-5p0rkni1fj0ktvlp9l5e7ef3dp5pdon9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
}

export default GoogleAuth
