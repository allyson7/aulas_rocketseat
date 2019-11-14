/**
 * Action Types
 */

export const Types = {
  LOAD_REQUEST: 'LOAD_REPOSITORIES_REQUEST',
  LOAD_SUCCESS: 'LOAD_REPOSITORIES_SUCCESS',
  LOAD_FAILURE: 'LOAD_REPOSITORIES_FAILURE',
};

/**
 * Reducers
 */

// Reducers responsável por armazenar e manipular dados no state do redux (estado global)
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

// Actions - ações que quer realizar dentro do reducer, do state

// Adicionar um todo
// Marcar todo como completo

// { type: 'ADD_TODO', text: 'Novo todo'}
// { type: 'MARK_AS_COMPLETED', id: 3 }

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_SUCCESS:
      return {
        ...state, data: action.payload.data, loading: false, error: false,
      };
    case Types.LOAD_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

/**
 * Actions creators
 */

export const Creators = {
  loadRepositoriesRequest: () => ({
    type: Types.LOAD_REQUEST,
  }),

  loadRepositoriesSuccess: (data) => ({
    type: Types.LOAD_SUCCESS,
    payload: { data },
  }),

  loadRepositoriesFailure: () => ({
    type: Types.LOAD_FAILURE,
  }),
};
