import * as React from 'react';
import { connect } from 'react-redux';
import { ScrollView, SafeAreaView } from 'react-native';
import BackgroundVideo from '../presentation/BackgroundVideo';
import TopItem from '../presentation/TopItem';
import BottomItem from '../presentation/BottomItem';
import KeyboardAvoid from '../presentation/KeyboardAvoid';
import { signIn } from '../store/Auth/actions';


const LogIn = ({ signIn }) => {
  return (
    <SafeAreaView>
      <KeyboardAvoid>
        <ScrollView 
          bounces={false} 
          contentInsetAdjustmentBehavior="automatic"
        >
          <BackgroundVideo />
          <TopItem signIn={signIn} />
          <BottomItem />
        </ScrollView>
      </KeyboardAvoid>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: () => dispatch(signIn),
  };
};

export default connect(null, mapDispatchToProps)(LogIn);
