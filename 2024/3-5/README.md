# Redux 문제점
- 작성한 코드에서 reducer는 순수해야함 하는 함수
- 순수해야만하는 reducer 함수와 비동기 작업은 애초에 맞지 않음
- 이를 해결해기 위해 미들웨어라고 하는 아키텍처를 제공하고 미들웨어 아키텍처 즉 'reducer' 바깥쪽에서 해결해라 라는 형태를 취하고 있음


## 동기와 비동기
- 참고 자료 : https://inpa.tistory.com/entry/%F0%9F%8C%90-js-async

### 동기
- 한 작업이 실행되는 동안 다른 작업은 멈춘상태를 유지하고 자신의 차례를 기다리는 것

### 비동기
- 어떠한 요청을 보내면 그 요청이 끝날 때까지 기다리는 것이 아니라, 응답에 관계없이 바로 다음 동작이 실행되는 방식

## 슌수함수
- 참고 자료 :
  - https://inpa.tistory.com/entry/%F0%9F%8C%90-js-async
  - https://velog.io/@jiiyoung/JavaScript-%EC%88%9C%EC%88%98%ED%95%A8%EC%88%98%EC%99%80-%EB%B9%84%EC%88%9C%EC%88%98%ED%95%A8%EC%88%98
- 입력이 똑같으면 항상 출력이 똑같은 함수
- 외부에 의존성을 전혀 가지고 있지 않아야 함