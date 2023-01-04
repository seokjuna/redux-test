# 리덕스로 상태 관리하기

노션 링크:<br>
https://seokjuna.notion.site/6-1-5d640759d4b94c37956738758655fa87<br>
https://seokjuna.notion.site/6-2-b82b06996ba54a1aaafe008eb9047257<br>
https://seokjuna.notion.site/6-3-ba1322b21ae14682a36beff26e71cc31<br>

## 리덕스 사용 원칙
- 전체 상탯값을 하나의 객체에 저장한다<br>
- 상탯값은 불변 객체다<br>
- 상탯값은 순수 함수에 의해서만 변경되어야 한다<br>
<br>

## 리덕스에서 상탯값이 변경되는 과정
<img width="500" alt="redux-value" src="https://user-images.githubusercontent.com/102382351/210492161-d00acea1-f0db-47bb-a9d8-812079a53cd2.png"><br>

React:<br>
- UI: FriendMain, TimelineMain
- npm: redux, immer, react-redux, reselect, redux-saga
- function: useEffect, useReducer, useDispatch, useSelector
