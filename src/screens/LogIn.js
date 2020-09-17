import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, SafeAreaView } from 'react-native';
import BackgroundVideo from '../presentation/BackgroundVideo';
import TopItem from '../presentation/TopItem';
import BottomItem from '../presentation/BottomItem';
import KeyboardAvoid from '../presentation/KeyboardAvoid';
import { signIn } from '../store/Auth/actions';


class LogIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
    };
  }

  addLogin = (login) => {
    console.log(login, 'login');
    this.setState({login})
  };

  addPassword = (password) => {
    console.log(password, 'password');
    this.setState({password})
  };

  render() {
    const { signIn, navigation } = this.props;
    const { login, password }   = this.state;
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
            />
            <BottomItem />
          </ScrollView>
        </KeyboardAvoid>
      </SafeAreaView>
    );
  }

};

const mapDispatchToProps = dispatch => {
  return {
    signIn: () => dispatch(signIn),
  };
};

export default connect(null, mapDispatchToProps)(LogIn);
