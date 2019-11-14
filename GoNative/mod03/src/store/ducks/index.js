import { combineReducers } from 'redux';

// state ['Fazer cafe', 'estudar react-native']
// { login: {... }, repositories: [] }
import login from './login';
import repositories from './repositories';

export default combineReducers({
  login,
  repositories,
});
