function createStore() {
  // 상태를 2depth 이상으로 깊어지는것을 redux는 지양
  let state;
  let handlers = [];

  function send(action) {
    state = worker(state, action);
    handlers.forEach(handler => handler());
  }

  function subscribe(handler) {
    handlers.push(handler);
  }

  function getState() {
    return state;
  }

  return {
    send,
    getState,
    subscribe
  };
}

function worker(state = { count: 0 }, action) {
  // 상태 바꾸기 (redux 에서는 새로운 상태로 반환 == 참조를 끊고 새로운 객체로 생성)
  switch(action.type) {
    case 'increase':
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
}

const store = createStore(worker);

store.subscribe(function() {
  console.log(store.getState());
});

store.send({ type: 'increase' });
store.send({ type: 'increase' });
// store.send({ type: '' });