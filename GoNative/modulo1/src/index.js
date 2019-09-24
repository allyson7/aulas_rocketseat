if (__DEV__) {
  import('./config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}
import './config/DevToolsConfig';

import Reactotron from 'reactotron-react-native';

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, Button} from 'react-native';

Reactotron.log('hello rendering world');

import Todo from '~/components/Todo';

export default class App extends Component {
  state = {
    usuario: 'Diego',
    todos: [{id: 0, text: 'Fazer café'}, {id: 1, text: 'Estudar GoNative '}],
  };

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Math.random(),
          text: 'Novo todo',
        },
      ],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* // <View style={styles.container}>
      //   <View style={styles.box} />
      //   <View style={styles.box} />
      //   <View style={styles.box} />
      //   <View style={styles.box} />
      //   <View style={styles.box}> */}
        <Text style={styles.boxText}>Ola</Text>
      </View>
      // </View>
      // <View style={styles.Container}>
      //   <Text>{this.state.usuario}</Text>
      //   {this.state.todos.map(todo => (
      //     <Todo key={todo.id} title={todo.text} />
      //   ))}
      //   <Button title="Adicionar todo" onPress={this.addTodo} />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 10,
    marginHorizontal: 20,
    transform: [{rotateZ: '20deg'}],
    borderWidth: 4,
    borderBottomColor: '#555',
    borderRightColor: '#555',
  },
  boxText: {
    color: '#fff',
  },
});
