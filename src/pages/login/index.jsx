import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { LoginCard } from 'Component';
import Grid from '@material-ui/core/Grid';
import './index.scss';
import { UserSignIn } from 'Redux/actions';
import { connect } from 'react-redux';

class Login extends Component {
  state = { email: '', password: '', emailError: false, passwordError: false };
  signUp = () => {
    let { emailError, password, passwordError, email } = this.state;
    if (!email) emailError = true;
    if (!password) passwordError = true;
    if (emailError || passwordError) {
      this.setState({ passwordError, emailError });
      return;
    }
    this.props.UserSignIn(email, password, () => {
      this.props.history.replace('/home');
    });
  };
  render() {
    const { emailError, password, passwordError, email } = this.state;
    return (
      <div className='container'>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xs={10} xl={7} sm={6} md={6} lg={8}>
            <img
              src={'https://fakestoreapi.com/icons/intro.svg'}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} xl={5} sm={6} md={6} lg={4}>
            <Grid container direction='row' justify='center'>
              <LoginCard
                emaidId={email}
                password={password}
                emailPlaceHolder='example@gmail.com'
                passwordPlaceHolder='*********'
                emailErrorMessage='Please Provide email id!!!'
                passwordErrorMessage='Please provide password!!!'
                emailError={emailError}
                passwordError={passwordError}
                emailLabel='Email Id'
                passwordLabel='Password'
                buttoonLabel='Sign up'
                onEmailChange={(e) => {
                  this.setState({
                    email: e.target.value,
                    emailError: e.target.value === '',
                  });
                }}
                onPasswordChange={(e) => {
                  this.setState({
                    password: e.target.value,
                    passwordError: e.target.value === '',
                  });
                }}
                onClick={this.signUp}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps, { UserSignIn })(withRouter(Login));
