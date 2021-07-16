import React from 'react'
import GoogleLogin from 'react-google-login'

const responseGoogle = (response) => {
  const { googleId, email, ImageUrl, givenName } = response.profileObj
  console.log(response.profileObj)
}

const GoogleAuth = () => {
  return (
    <GoogleLogin
      clientId="1054065807793-5p0rkni1fj0ktvlp9l5e7ef3dp5pdon9.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      isSignedIn={true}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default GoogleAuth
