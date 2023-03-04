<!-- prettier-ignore -->
<!-- prettier-ignore-start-->

## 01. CSS란?

- CSS는 Cascading Style Sheets의 약자로 HTML 문서의 스타일을 지정하는 언어이다.

## 02. HTML tag를 선택하는 방법

- 어디에 style을 입힐 것인가?

```html
<div id="div_id" class="div_class"></div>
```

- 1. HTML tag style 속성에 부여

```html
<div style="width: 200px; height: 100px; background-color: yellow;"></div>
```

- 2. HTML tag를 선택

```css
div {
  width: 200px;
  height: 100px;
  background-color: yellow;
}
```

- 3. tag의 id를 선택

```css
#div_id {
  width: 200px;
  height: 100px;
  background-color: yellow;
}
```

- 4. tag의 className을 선택

```css
#div_class {
  width: 200px;
  height: 100px;
  background-color: yellow;
}
```

### 실습

> 같은 스타일을 다르게 적용해보기
>
> 1. html tag 내에 style 속성 부여
> 2. html head에 style 태그를 넣고, style을 입힐 tag를 선택하여 style 속성 부여
> 3. css파일을 생성하고 html head에 css 파일을 link

## 03. CSS 속성

### width, height

- width: 가로 길이, height: 세로 길이
- 단위: px(픽셀), %(퍼센트) 등
- 사용법

```css
#box {
  width: 100px;
  height: 50px;
}
```

### margin, padding

- margin: 바깥쪽 여백, padding: 안쪽 여백
  ![marginpading](https://user-images.githubusercontent.com/124873454/218686578-275ceefd-79be-4df4-8c17-68c7b9408ff3.png)
- 테두리인 border를 경계로 margin과 padding이 나뉜다.
- 방향(상하좌우)마다 여백을 다르게 설정할 수 있다.
  - `margin: 10px`: 상하좌우 모두 10px
  - `margin: 10px 20px`: 상하 30px, 좌우 10px
  - `margin: 10px 20px 30px`: 상 10px, 좌우 10px, 하 30px
  - `margin: 10px 20px 30px 40px`: 상 10px, 우 20px, 하 30px, 좌 40px
  - `margin`을 예시로 들었지만, `padding`도 위와 마찬가지

#### 실습

> 4개의 div box 만들기
>
> - 1번 box: margin X, padding X
> - 2번 box: margin 상하좌우 10px, padding 상하좌우 0px
> - 3번 box: margin 상하 10px, 좌우 20px, padding 상하 10px, 좌우 20px
> - 4번 box: margin 상우하좌 순 10px, 20px, 30px, 40px, padding 상우하좌순 5px, 10px, 15px, 20px

### color

- color 속성은 text에 색상을 입힌다.
- color 속성을 부여하는 방법에는 4가지가 있다.
  - 1. `red`, `blue` 등 정의된 색상
  - 2. `#000000`, `#ABABFF` 등 16진수 색상 코드
  - 3. `rgb(255, 255, 255)` 등의 RGB 색상
  - 4. `rgba(255, 255, 255, 0.5)` 등의 알파(투명도)가 적용된 RGBA 색상
  - 16진수 색상코드의 각 자리에는 0 ~ F까지, RGB의 범위는 0 ~ 255까지, 알파의 범위는 0 ~ 1 이다.
- 사용법

```css
#text1 {
  color: red;
}
#text2 {
  color: #0a0;
}
#text3 {
  color: rgb(0, 0, 150);
}
#text4 {
  color: rgba(30, 150, 100, 0.5);
}
```

### font

- font 속성은 글자의 폰트를 정의한다.
- font에는 6개의 세부적인 속성이 존재한다.
  - 1. font-style: normal, italic 등의 글꼴 스타일
  - 2. font-weight: 글자 두께
  - 3. font-variant: 글꼴 변형 (소문자를 대문자로 바꾸는 등)
  - 4. font-size: 글자 크기
  - 5. line-height: 줄 간격
  - 6. font-family: 글꼴(돋움, 바탕 등)

### text-align

- text-align 속성은 텍스트의 정렬 방향을 정한다.
  - left: 왼쪽 정렬
  - right: 오른쪽 정렬
  - center: 중앙 정렬
  - justify: 양쪽 정렬

### background

- background 속성은 태그의 배경을 지정한다.
  - background-color: 배경 색
  - background-image: 배경 이미지
  - background-repeat: 배경 이미지 반복 여부
  - background-position: 배경 이미지 위치

### border

- bolder 속성은 태그의 테두리를 정한다.
  - border-width: 테두리 두께
  - border-style: 테두리 스타일
  - border-color: 테두리 색상

### border-radius
- border-radius는 테두리를 둥글게 만들어준다.

### visibility
- visibility 속성은 태그의 가시성을 정한다.
  - visible: 보임
  - hidden: 숨김(영역 유지)

### display
- display 속성은 태그를 어떻게 보여줄지를 결정한다.
  - none: 보이지 않음
  - block: 블록 박스(위아래 정렬)
  - inline: 인라인 박스(좌우 정렬)

### position
- position 속성은 태그를 어떻게 위치시킬지를 정의한다.
  - static: 기본값, 다른태그와의 관계에 의해 자동으로 배치
  - absolute: 절대 좌표로 지정
  - relative: 원래 있던 위치를 기준으로 좌표 지정
  - fixed: 스크롤과 상관 없이 고정
  - inherit: 부모의 값을 상속

### 레이아웃 만들어보기 실습
<img width=500px src="https://user-images.githubusercontent.com/124873454/218699413-f0934c74-5cda-446f-bff3-f69ad308c1e0.jpeg">


<!-- prettier-ignore-end-->
