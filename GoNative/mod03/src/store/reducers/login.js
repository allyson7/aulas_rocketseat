// Reducers responsável por armazenar e manipular dados no state do redux (estado global)
const INITIAL_STATE = {
  username: null,
  error: false,
};

// Actions - ações que quer realizar dentro do reducer, do state

// Adicionar um todo
// Marcar todo como completo

// { type: 'ADD_TODO', text: 'Novo todo'}
// { type: 'MARK_AS_COMPLETED', id: 3 }

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, username: action.payload.username, error: false };
    case 'LOGIN_FAILURE':
      return { ...state, error: true };
    default:
      return state;
  }
}
