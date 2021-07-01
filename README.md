# jsp-crome-app-momentum-

# 목차
- [본문](#본문)
  - [Login form](#login-form-구성)
  - [clock](#clock-구성)
  - [todo list](#todo-list-구성)
  - [quotes](#quotes-구성)
  - [background](#background-구성)
  - [weather](#weather-구성)



# 본문

## Login form 구성
> addEventListener

`addEventListener`를 통해 input 입력값이 submit 되었을때 브라우저의 자동 새로고침을 preventDefault로 막아주고
로그인 함수를 구성하여 local storage에 input된 데이터를 저장하고 입력되었을때 `display: none;`이란 css class를 추가해주어 숨겨주고 
"Hello" + 저장된 데이터를 보여주는 함수를 만들고 위 숨겨주는 클래스를 제거하여 보여준다.

## clock 구성
> new Date();

웹 브라우저의 기본 제공 함수를 이용하여 `new Date();`를 변수로 지정하여 가져온다.


두자리 수로 표현하기 위해 각각 시, 분, 초로 나누어 변수로 지정하고 `date.getHours()`, `date.getMinutes()`, `date.getSeconds()`를
사용해 각 Number타입의 값을 가져오고 `padStart(2,"0")`로 자리수를 2로 지정해 빈자리는 0으로 채워준다.


이후 각 시, 분, 초를 이어주기 위해 각각을 String()으로 문자열타입의 자료형으로 바꾸어 주고 `${hours}:${minutes}:${seconds}`로 표현해준다.

## todo list 구성
> createElement & localStorage.setItem, getItem

기본적인 구성형식은 Login form과 같지만 local storage를 적극이용해 빈배열에 `  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };`를 id로 Date.now()를 이용해 난수의 숫자를 넣어준다.
  
  
  `toDos.push(newToDoObj);`로 빈배열에 오브젝트 형태로 넣어준다.
  동시에 createElement로 각 html요소를 넣어주는 paintToDo 함수를 실행하여 화면에 보여주고
  saveToDos함수를 이용해 local storage에 저장해준다.
  
  
  또한 ` if (toDos.length > 5) {
    toDos.pop();
    alert("Please Delete other list");`의 조건을 넣어주어 5개이하로 리스트 작성에 제한을 두어
    화면하단에 넣어줄 인용구와 날씨정보가 화면 밖으로 나가지 않도록 해준다.
    
    
그리고 `JSON.stringify(toDos)`로 입력된 값을 문자화시키고 `JSON.parse(savedToDos)`로 문자열로 저장된 값들을 배열로 바꾸어 forEach로 각 인덱스마다 paintToDo 함수를 실행해준다.
    
## quotes 구성
> Math.ramdom() & Math.floor()

`{
    quote: "You'll never find a rainbow if you're looking down.",
    author: "Chalie Chaplin",
  }`와 같은 오브젝트들로 이루어진 배열을 만들어 준다.
  
  그 후 `const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];`과 같이 Math.random()으로 0 ~ 1까지의 난수를 가져오고 위 배열의 길이만큼 곱한 후 Math.floor로 내림하여 모든 인덱스 값이 랜덤하게 잘 불러와지도록 해준다.
  
  이후 html 요소에 innerText로 값을 넣어준다.
  
## background 구성
>
  
  quotes와 동일한 구성이며 이미지 배열을 나숫화된 인덱스 값으로 불러와 해당 변수를 `creatElement("img")`로 html에 추가해준다.
  
  배경 난수화 코드 = `images[Math.floor(Math.random() * images.length)];`
  img 요소에 이미지 소스 넣기 = bgImage.src = `img/${chosenImage}`;
  
## weather 구성
  > API & fetch()
  
  open api를 이용해 날씨 정보를 가져온다.
  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  
  fetch()로 api 서버와 연동시키고 html 요소를 선택하여 값을 변경해준다.
  
  브라우저 기본 위치 정보 확인 함수 = `navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);`
