import React from 'react';
import PropTypes from 'prop-types';

import {View, Text, StyleSheet} from 'react-native';

const Todo = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
);

Todo.defaultProps = {
  title: 'Todo padrão',
};

Todo.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create({});

export default Todo;
// stateless components são componentes que não possuem estado nem ciclo de vidas
// stateful components são componentes que tem estado e métodos de ciclos de vida
