export const actionCreator = type => payload => ({
  type,
  payload
})

export function createStore(reducer) {
  // 상태를 2depth 이상으로 깊어지는것을 redux는 지양
  let state;
  let handlers = [];

  function dispatch(action) {
    state = reducer(state, action);
    handlers.forEach(handler => handler());
  }

  function subscribe(handler) {
    handlers.push(handler);
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState,
    subscribe
  };
}
