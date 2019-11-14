/**
 * Action Types
 */
export const Types = {
  REQUEST: 'LOGIN_REQUEST',
  SUCCESS: 'LOGIN_SUCCESS',
  FAILURE: 'LOGIN_FAILURE',
};

/**
 * Reducers
 */

// Reducers responsável por armazenar e manipular dados no state do redux (estado global)
const INITIAL_STATE = {
  username: null,
  loading: false,
  error: false,
};

// Actions - ações que quer realizar dentro do reducer, do state

// Adicionar um todo
// Marcar todo como completo

// { type: 'ADD_TODO', text: 'Novo todo'}
// { type: 'MARK_AS_COMPLETED', id: 3 }

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state, username: action.payload.username, error: false, loading: false,
      };
    case Types.FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

/**
 * Actions Creators
 */
export const Creators = {
  loginRequest: (username) => ({
    type: Types.REQUEST,
    payload: { username },
  }),

  loginSuccess: (username) => ({
    type: Types.SUCCESS,
    payload: { username },
  }),

  loginFailure: () => ({
    type: Types.FAILURE,
  }),
};
