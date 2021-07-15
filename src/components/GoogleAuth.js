import React from 'react'

// todo: convert to functional component
class GoogleAuth extends React.Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        // params doc: https://developers.google.com/identity/sign-in/web/reference?hl=en#gapiauth2initparams
        .init({
          client_id:
            '1054065807793-5p0rkni1fj0ktvlp9l5e7ef3dp5pdon9.apps.googleusercontent.com',
          ux_mode: 'popup',
          // access users' email
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance()
          // https://developers.google.com/identity/sign-in/web/reference#googleauthissignedinget

          this.setState({ isSignedIn: this.auth.isSignedIn.get() })
          // this.onAuthchange()
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  // sign in
  onLogInClick = () => {
    this.auth.signIn()
    const currentUserId = window.gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getBasicProfile()
      .getId()
    const currentUserMail = window.gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getBasicProfile()
      .getEmail()
    const currentUseName = window.gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getBasicProfile()
      .getName()

    localStorage.setItem('userId', currentUserId)
    localStorage.setItem('userMail', currentUserMail)
    localStorage.setItem('username', currentUseName)
  }
  // register a user
  onSignUpClick = () => {}

  // sing out
  onLogOutClick = () => {
    this.auth.signOut()
    localStorage.clear()
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onLogOutClick} className="btn btn-info">
          log out
        </button>
      )
    } else {
      return (
        <>
          <button onClick={this.onLogInClick} className="btn btn-success">
            log in
          </button>
          <button onClick={this.onSignUpClick} className="btn btn-primary">
            sign up
          </button>
        </>
      )
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default GoogleAuth
