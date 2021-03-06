import React, { Component } from 'react';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActivityIndicator } from 'react-native';
import {
  Container, Input, Button, ButtonText, Error,
} from './styles';

import { Creators as LoginActions } from '~/store/ducks/login';

class Login extends Component {
  state = { username: '' };

  handleSubmit = async () => {
    const { username } = this.state;
    const { loginRequest } = this.props;

    loginRequest(username);
  };

  render() {
    const { username } = this.state;
    const { error, loading } = this.props;

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
          { loading ? <ActivityIndicator size="small" color="#FFF" /> : <ButtonText>Entrar</ButtonText>}
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.login.error,
  loading: state.login.loading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
