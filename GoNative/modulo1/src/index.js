import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, Button} from 'react-native';

import Todo from './components/Todo';

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
      <View style={styles.Container}>
        <Text>{this.state.usuario}</Text>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Adicionar todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
