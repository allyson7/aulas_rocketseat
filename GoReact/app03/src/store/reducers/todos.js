const INITIAL_STAGE = [
  { id: 1, text: 'fazer café' },
  { id: 2, text: 'Estudar react' },
];

export default function todos(state = INITIAL_STAGE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
