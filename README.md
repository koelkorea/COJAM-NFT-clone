# COJAM-NFT-CLONE 하는 토이 프로젝트

## 작업에 사용한 모듈
> - npx create-react-app 명령어에 필요한 기본 react 패키지
> - axios : opensea API 사용 용도


## 테스트 구동에 필요한 절차 

> 1. node.js install
> 2. 해당 프로젝트 download, 혹은 clone
> 3. 터미널을 통해 해당 파일이 위치한 디렉토리로 접근
> 4. npm i 명령어을 통해, 필요한 모듈을 다운로드
> 5. npm start를 통해 react 프로젝트 서버 구동 후 http://localhost:3000 에 접근


## 화면 및 주요 구현 기능

### 1. 반응형 레이아웃 구현
#### - 브라우저 사이즈 조절을 통한 시현
![image](https://user-images.githubusercontent.com/82797695/193113657-927486d7-419b-4f31-91e7-60d401f4e1c6.gif)
#### - 모바일 시뮬레이션을 통한 시현
![image](https://user-images.githubusercontent.com/82797695/193113655-62a0cee3-9113-471d-918d-6f24007a3382.gif)

### 2. 조건부 애니메이션 구현
![image](https://user-images.githubusercontent.com/82797695/193113646-98ec7ce9-1031-49dd-a508-97c8fc47732f.gif)
![image](https://user-images.githubusercontent.com/82797695/193113651-818029e3-8278-47f6-be3d-ba9a1c614fe0.gif)


## 작업(공부) 중 얻은 교훈
### 1. state변수는 변화시 화면 rerender의 조건 
  > - 어지간하면 정말 중요한 값을 받아서 담는 경우에 해당하는 경우에 한해서 작성해야 함
  > - 너무 많으면 rendering 통제가 힘들며, spa를 쓰는 이유가 없어짐
  > - 2군데의 api를 통해 값을 받아오는 경우처럼, 불가피한 경우 아니면 굳이 수를 늘리지 말자
### 2. axios나 fetch나 근본적으로 promise 기능의 사용이 내장되어 구현되어 있음. 
  > - 하지만 무한 호출을 막기 위해서는 useEffect()와 연계되어야 함
### 3. useEffect() 안의 1번째 파라미터는 콜백함수, 2번째는 dependency를 위한 배열
  > - dependency는 정확히는 [특정state]의 변화 감지시 반복실행하는 기능으로 1번만 호출을 원한다면 []나 []가 들어있는 변수를 넣으면 됨
### 4. 화면에 값을 뿌리는 것과 rendering은 절대 합을 맞춰 진행하지 않고 비동기적으로 진행됨
### 5. rerender 작업의 조건은 몇가지가 있는데 그 중 하나는 state값의 변화를 감지하는 것
  > - 4번의 이유와 연계되어, 따라서 값을 불러오기 전 화면 랜더링시 state값이 null(보통 초기값)인 경우에 어떤 값을 집어넣어야 할지도 조건문으로 상기해야 함
### 6. props가 넘기는건 일반 값 뿐이 아니고, 객체와 객체 안의 객체까지 전부 다 넘기는거 가능
### 7. props로 넘기는 값은 '직계부모 -> 직계자식'이며 '손자'로 직행은 불가능함
  > - 따라서 state가 많아지면, 값도 정확히 보내는 행위를 컴포넌트 트리의 깊이만큼 반복해야 함 
  > - 당연히 props를 관리하는 것도 어려움 = redux를 쓰는 이유
  > - props로 보내는 값, 은근히 빠뜨리기 쉽기에 잘 체크해야함 = redux를 쓰는 이유
