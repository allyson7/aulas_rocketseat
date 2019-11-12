import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container, Input, Button, ButtonText, Error,
} from './styles';

import api from '~/services/api';

import * as LoginActions from '~/store/actions/login';

class Login extends Component {
  state = { username: '' };

  handleSubmit = async () => {
    const { username } = this.state;
  };

  render() {
    const { username } = this.state;
    const { error } = this.props;

    return (
      <Container>
        { error && <Error>usuário inexistente</Error>}

        <Input
          value={username}
          onChangeText={(text) => this.setState({ username: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
        />
        <Button onPress={this.handleSubmit}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.login.error,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
