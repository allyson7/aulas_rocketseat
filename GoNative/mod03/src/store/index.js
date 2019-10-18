import {createStore} from 'redux';

// Reducers responsável por armazenar e manipular dados no state do redux (estado global)
const INITIAL_STATE = [
  {id: 1, text: 'Fazer café', completed: false},
  {id: 2, text: 'Estudar react native', completed: true},
  {id: 3, text: 'entender o Redux', completed: false},
];

// Actions - ações que quer realizar dentro do reducer, do state

// Adicionar um todo
// Marcar todo como completo

// { type: 'ADD_TODO', text: 'Novo todo'}
// { type: 'MARK_AS_COMPLETED', id: 3 }

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {id: Math.random(), text: action.text, completed: false},
      ];
    case 'MARK_AS_COMPLETED':
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
