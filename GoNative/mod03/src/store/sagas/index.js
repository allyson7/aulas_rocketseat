import {
 all, takeLatest, call, put 
} from 'redux-saga/effects';
import api from '~/services/api';

import * as LoginActions from '~/store/actions/login';

function* login(action) {
  try {
    const { username } = action.payload;

    yield call(api.get, `/users/${username}`);

    // deu certo
    yield put(LoginActions.loginSuccess(username));

    // navegar
    // navigation.navigate('Repositories');
  } catch (err) {
    // setar o erro
    yield put(LoginActions.loginFailure());
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest('LOGIN_REQUEST', login),
  ]);
}
