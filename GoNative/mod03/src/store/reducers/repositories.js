// Reducers responsável por armazenar e manipular dados no state do redux (estado global)
const INITIAL_STATE = {};

// Actions - ações que quer realizar dentro do reducer, do state

// Adicionar um todo
// Marcar todo como completo

// { type: 'ADD_TODO', text: 'Novo todo'}
// { type: 'MARK_AS_COMPLETED', id: 3 }

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
