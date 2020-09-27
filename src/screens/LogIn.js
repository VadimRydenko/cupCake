import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { ScrollView, SafeAreaView } from 'react-native';
import BackgroundVideo from '../presentation/BackgroundVideo';
import TopItem from '../presentation/TopItem';
import BottomItem from '../presentation/BottomItem';
import KeyboardAvoid from '../presentation/KeyboardAvoid';
import { signIn } from '../store/Auth/actions';
import { validateEmail } from '../core/func/validation';
import withAnimatedAlert from '../hocs/withAnimatedAlert';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
    };
  }

  addLogin = (login) => {
    this.setState({ login });
  };

  addPassword = (password) => {
    this.setState({ password });
  };

  userSignIn = () => {
    const { login } = this.state;
    if (!validateEmail(login)) {
      this.props.showModalAnimatedModal();
    }
  };


  render() {
    const { signIn, navigation } = this.props;
    const { login, password } = this.state;
    return (
      <SafeAreaView>
        <KeyboardAvoid>
          <ScrollView
            bounces={false}
            contentInsetAdjustmentBehavior="automatic"
          >
            <BackgroundVideo />
            <TopItem
              signIn={signIn}
              addLogin={this.addLogin}
              addPassword={this.addPassword}
              email={login}
              password={password}
              navigation={navigation}
              userSignIn={this.userSignIn}
            />
            <BottomItem />
          </ScrollView>
        </KeyboardAvoid>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signIn),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
  withAnimatedAlert,
)(LogIn);
