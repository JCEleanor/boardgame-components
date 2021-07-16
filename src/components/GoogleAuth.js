import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

// todo: convert to functional component
// const GoogleAuth = () => {
//   const [auth, setAuth] = useState({})
//   const [isSignedIn, setIsSignedIn] = useState(null)

//   const onAuthChange = () => {
//     setIsSignedIn(auth.isSignedIn.get())
//   }

//   // sign in
//   const onLogInClick = () => {
//     auth.signIn()
//     const currentUserId = auth.currentUser.get().getId()
//     const currentUserMail = auth.currentUser.get().getBasicProfile().getEmail()
//     const currentUseName = auth.currentUser.get().getBasicProfile().getName()

//     localStorage.setItem('userId', currentUserId)
//     localStorage.setItem('userMail', currentUserMail)
//     localStorage.setItem('username', currentUseName)

//     // 登入後回到上一頁
//     this.props.history.goBack()
//   }

//   // register a user
//   const onSignUpClick = () => {
//     auth.signIn()
//     const currentUserId = auth.currentUser.get().getId()
//     const currentUserMail = auth.currentUser.get().getBasicProfile().getEmail()
//     const currentUseName = auth.currentUser.get().getBasicProfile().getName()
//     axios
//       .post('http://localhost:8080/register-google', {
//         currentUserId,
//         currentUserMail,
//         currentUseName,
//       })
//       .then((res) => {
//         console.log(res.data)
//       })
//       .catch((e) => {
//         console.log(e)
//       })
//   }

//   // sing out
//   const onLogOutClick = () => {
//     auth.signOut()
//     localStorage.clear()
//   }

//   const renderAuthButton = () => {
//     if (isSignedIn === null) {
//       return (
//         <>
//           <button onClick={onLogInClick} className="btn btn-success">
//             log in with Google
//           </button>
//           <button onClick={onSignUpClick} className="btn btn-primary">
//             sign up with Google
//           </button>
//         </>
//       )
//     } else if (isSignedIn) {
//       return (
//         <button onClick={onLogOutClick} className="btn btn-info">
//           log out
//         </button>
//       )
//     } else {
//       return (
//         <>
//           <button onClick={onLogInClick} className="btn btn-success">
//             log in with Google
//           </button>
//           <button onClick={onSignUpClick} className="btn btn-primary">
//             sign up with Google
//           </button>
//         </>
//       )
//     }
//   }

//   useEffect(() => {
//     window.gapi.load('client:auth2', () => {
//       window.gapi.client
//         // params doc: https://developers.google.com/identity/sign-in/web/reference?hl=en#gapiauth2initparams
//         .init({
//           client_id:
//             '1054065807793-5p0rkni1fj0ktvlp9l5e7ef3dp5pdon9.apps.googleusercontent.com',
//           ux_mode: 'popup',
//           // access users' email
//           scope: 'email',
//         })
//         .then(async () => {
//           const getAuthInstance = await window.gapi.auth2.getAuthInstance()
//           setAuth(getAuthInstance)
//           console.log(auth)
//           // https://developers.google.com/identity/sign-in/web/reference#googleauthissignedinget

//           setIsSignedIn(auth.isSignedIn.get())
//           // this.setState({ isSignedIn: this.auth.isSignedIn.get() })
//           // this.onAuthchange()
//           auth.isSignedIn.listen(onAuthChange)
//         })
//         .catch((e) => {
//           console.log(e)
//         })
//     })
//   }, [])

//   return <div>{renderAuthButton()}</div>
// }

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
          console.log(this.auth)
          // https://developers.google.com/identity/sign-in/web/reference#googleauthissignedinget

          this.setState({ isSignedIn: this.auth.isSignedIn.get() })
          // this.onAuthchange()
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
        .catch((e) => {
          console.log(e)
        })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  // sign in
  onLogInClick = () => {
    this.auth.signIn()
    const currentUserId = this.auth.currentUser.get().getId()
    const currentUserMail = this.auth.currentUser
      .get()
      .getBasicProfile()
      .getEmail()
    const currentUseName = this.auth.currentUser
      .get()
      .getBasicProfile()
      .getName()

    localStorage.setItem('userId', currentUserId)
    localStorage.setItem('userMail', currentUserMail)
    localStorage.setItem('username', currentUseName)

    this.props.history.goBack()
  }
  // register a user
  onSignUpClick = () => {
    this.auth.signIn()
    const currentUserId = this.auth.currentUser.get().getId()
    const currentUserMail = this.auth.currentUser
      .get()
      .getBasicProfile()
      .getEmail()
    const currentUseName = this.auth.currentUser
      .get()
      .getBasicProfile()
      .getName()
    axios
      .post('http://localhost:8080/register-google', {
        currentUserId,
        currentUserMail,
        currentUseName,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  // sign out
  onLogOutClick = () => {
    this.auth.signOut()
    localStorage.clear()
  }

  renderAuthButton() {
    console.log(this.state.isSignedIn)

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
            log in with Google
          </button>
          <button onClick={this.onSignUpClick} className="btn btn-primary">
            sign up with Google
          </button>
        </>
      )
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default withRouter(GoogleAuth)
