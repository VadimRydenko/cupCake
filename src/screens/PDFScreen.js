import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, SafeAreaView, View, StyleSheet, Dimensions } from 'react-native';
import PDFView from 'react-native-view-pdf';
import BackgroundVideo from '../presentation/BackgroundVideo';
import TopItem from '../presentation/TopItem';
import BottomItem from '../presentation/BottomItem';
import KeyboardAvoid from '../presentation/KeyboardAvoid';
import { signIn } from '../store/Auth/actions';
import { TouchableOpacity } from 'react-native-gesture-handler';

class PDFScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      login: '',
    };
  }

  render() {
    return (
        <View style={{ flex: 1 }}>
        <PDFView
          fadeInDuration={250.0}
          style={{ flex: 1 }}
          resource={'RV.pdf'}
          // resource={'/android/app/src/main/res/RV.pdf'}
          resourceType={'file'}
          onLoad={() => console.log(`PDF rendered from`)}
          onError={(error) => console.log('Cannot render PDF', error)}
        />
        </View>
    );
  }
};

const styles = StyleSheet.create({
  pdf: {
      flex:1
  }
});

export default PDFScreen;

