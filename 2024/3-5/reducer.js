import * as ActionsType from './action-type.js';

const InitializeState = { count: 0};

// reducer는 그냥 함수 (호출되고 리턴하면 끝나는 함수)
// 떠라서 아래 result의 비동기 함수가 실행되지만 reducer 함수 자체의 컨트롤은 그냥 바로 내려가서 return이 끝나버림
// 반환값 : undefined
export function reducer(state = InitializeState, action) {
  switch(action.type) {
    case ActionsType.INCREASE:
      return { ...state, count: state.count + 1 };
    case ActionsType.DECREASE:
      return { ...state, count: state.count - 1 };
    case ActionsType.RESET:
      fetch('/reset')
        .then(response =-> response.json())
        .then(result => {
          // result는 비동기로 콜백되는 함수
          if(result) {
            // 현재 코드로는 return을 받아 줄 대상이 없는 상태
            return { ...state, count: 0 };
          }
        })
      // return { ...state, count: 0 };
    default:
      return { ...state };
  }
}