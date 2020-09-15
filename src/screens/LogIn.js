import * as React from 'react';
import { connect } from 'react-redux';
import { ScrollView, SafeAreaView } from 'react-native';
import BackgroundVideo from '../presentation/BackgroundVideo';
import TopItem from '../presentation/TopItem';
import BottomItem from '../presentation/BottomItem';
import KeyboardAvoid from '../presentation/KeyboardAvoid';
import { signIn } from '../store/Auth/actions';


class LogIn extends React.Component {

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
    return (
      <SafeAreaView>
        <KeyboardAvoid>
          <ScrollView 
            bounces={false} 
            contentInsetAdjustmentBehavior="automatic"
          >
            <BackgroundVideo />
            <TopItem 
            signIn={this.props.signIn}
            addLogin={this.addLogin}
            addPassword={this.addPassword}
            email={this.state.login}
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
