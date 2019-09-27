import './config/ReactotronConfig';
import './config/DevToolsConfig';

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

console.tron.log('Hello world');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Ola</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
