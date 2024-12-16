import * as ActionsType from './action-type.js';

const InitializeState = { count: 0};

export function reducer(state = InitializeState, action) {
  // 상태 바꾸기 (redux 에서는 새로운 상태로 반환 == 참조를 끊고 새로운 객체로 생성)
  switch(action.type) {
    case ActionsType.INCREASE:
      return { ...state, count: state.count + 1 };
    case ActionsType.DECREASE:
      return { ...state, count: state.count - 1 };
    case ActionsType.RESET:
      return { ...state, count: 0 };
    default:
      return { ...state };
  }
}