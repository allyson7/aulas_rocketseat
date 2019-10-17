import {createStore} from 'redux';

// Reducers
const INITIAL_STATE = [
  'Fazer café',
  'Estudar react native',
  'entender o Redux',
];

// Actions

// Adicionar um todo
// Marcar todo como completo

// { type: 'ADD_TODO', text: 'Novo todo'}
// { type: 'MARK_AS_COMPLETED', id: 3 }

function reducer(state = INITIAL_STATE, action) {
  console.log(action);

  return state;
}

const store = createStore(reducer);

export default store;
