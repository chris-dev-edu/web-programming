<!-- prettier-ignore -->
<!-- prettier-ignore-start-->
# Lecture 01.

## 01. 환경설정
### 개발환경
- VSCode IDE 다운로드 https://code.visualstudio.com/Download
- VSCode Extension: `open in browser` 설치
<kbd><img src="https://user-images.githubusercontent.com/124873454/217787899-8f06194d-8aac-48e1-88da-0990039add76.PNG"/></kbd>

### git 연동
- github 계정 생성 https://github.com
- github repository 생성
   - repository란? 우리의 코드를 저장하는 저장소

###  설정한 내용을 git에 올리기
- VSCode에서 README.md 파일 생성
- README.md 파일 내용 작성
- VSCode: Download git for Windows 
<kbd><img width=300 src="https://user-images.githubusercontent.com/124873454/217792153-242158e3-a90d-439b-bd9b-995ae497f509.PNG"/></kbd>
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/chris-dev-edu/test.git
git push -u origin main
```
- git repository 확인

## 02. HTML, CSS, Javascript란?
### HTML
- 정의: Hyper Text Markup Language의 약자
- 웹 페이지의 제목, 이미지, 내용 등을 정의하고 구조와 의미를 부여하는 정적 마크업 언어이다.

### CSS
- 정의: Cascading Style Sheets
- 마크업 언어(ex. HTML)가 실제 표시되는 색상, 레이아웃, 크기, 폰트 등을 지정하여 컨텐츠 구조를 꾸며주는 정적 언어이다.

### Javascript
- HTML 문서의 컨텐츠를 바꾸고 움직이는 등 페이지를 동적으로 꾸며주는 프로그래밍 언어이다.

### 한눈에 보기
<kbd><img src="https://user-images.githubusercontent.com/124873454/217800775-91ec0d12-4dcc-4cc6-ba41-a8c6df380fe1.PNG"/></kbd>

## 03. HTML 알아보기
### 구조
```html
<html>
   <head>
      <title>My Homepage</title>
   </head>
   <body>
   Welcome to my homepage!
   </body>
</html>
```

### 태그
- HTML 태그는 이름에 따라 각자 특정한 역할을 가지고있다.
- 태그 안에는 내용, 다른 태그가 들어갈 수 있다. (이때, 태그를 연 순서대로 닫아야 한다.)

올바른 예
```html
<a>a 태그</a>
<a>
   <b>태그 안에 다른 태그</b>
</a>
```

잘못된 예
```html
<a>
   <b>b태그 먼저 닫혀야 함</a>
</b>
```
- 닫는 태그가 없는 태그
   - 태그 내에 넣을 값이 없기 때문에 닫는 태그가 따로 존재하지 않는 태그도 있다.

   | tag | self-closing |
   | :-----: | :-----: |
   | `<br>` | `<br/>` |
   | `<img>` | `<img/>` |
   | `<meta>` | `<meta/>` |
   | `<link>` | `<link/>` |
   | `<input>` | `<input/>` |
   | `<hr>` | `<hr/>` |
   - 위와 같은 태그들은 self-closing을 활용한다.

- 태그의 속성
    - 각자의 태그마다 또는 공통으로 가지고있는 속성값이 있으며, 해당 값을 태그에 입력해줄 수 있다.
    ```html
    <html>
        <head>
    <link type="text/css" href="my_style.css">
        </head>
        <body>
            <font color="red" face="Dotum">Hello</font>
            <font color="yellow">World</font>
        </body>
    </html>
    ```
    - id, class 속성을 지정하여 CSS, Javascript에서 태그에 쉽게 접근할 수 있다.
    - style 속성은 태그의 스타일을 정의한다.
    ```html
    <div style="width: 300px; height: 50px; background-color: red;"></div>
    ```

### 태그 살펴보기 및 실습

| **태그** | **설명** |
| :-----: | ----- |
| **기본 태그** |
| `<!DOCTYPE html>` | 이 페이지를 HTML로 해석할 것을 명시 |
| html | 웹 페이지의 시작과 끝을 나타내는 태그 |
| head | 웹 페이지 정보, 문서에서 사용할 외부 파일을 연결하는 태그 |
| title | 웹 페이지 제목을 나타내는 태그 |
| meta | 문자 인코딩 및 문서 키워드, 요약 정보를 나타내는 태그 |
| body | 웹 페이지에 실제 표시되는 내용을 담는 태그 |
||
| **문서 구조 태그** |
| div | 특별한 의미 없이, 컨텐츠들을 목적에 따라 묶을때 사용되는 태그 (자동 줄바꿈) |
| span | 특별한 의미 없이, 컨텐츠들을 목적에 따라 묶을때 사용되는 태그 (줄바꿈 없음) |
||
| **텍스트 입력** |
| h1, h2 ~ h6 | 제목 |
| p | 단락 |
| br | 줄바꿈(self-closing) |
| blockquote | 인용문 |
| strong | 굵게, 중요한 내용 |
| b | 굵게, 일반적인 내용 |
| em | 텍스트 기울임, 중요한 내용 |
| i | 텍스트 기울임, 일반적인 내용 |
| u | 텍스트 밑줄 |
| s | 텍스트 취소선 |
||
| **목록 입력** |
| ol | 번호순 목록 |
| ul | 번호없는 목록 |
| li | 리스트 내용 |
||
| **표 입력** |
| table | 테이블 만들기 |
| tr | 행 삽입 |
| td | 셀 삽입 |
||
| **액션 태그** |
| button | 버튼 |
| input | 입력값 받기 |
| select | 드롭다운 목록 생성 |
| img | 이미지파일 넣기 |
| audio | 오디오파일 넣기 |
| video | 비디오파일 넣기 |
| a | 하이퍼링크 |
| form | 폼 입력 |

- https://www.w3schools.com/TAGS/default.asp 에 방문하면 더 다양한 HTML tag들을 확인할 수 있다.

### 코드를 예쁘게 정렬하기
- VSCode Extension: `Prettier - Code formatter` 설치
<kbd><img src="https://user-images.githubusercontent.com/124873454/217837970-5f16555e-3360-4d2b-b5d7-78029eabfe19.PNG"/></kbd>

- `Ctrl` + `,`: settings 이동
- `Default Formatter` 검색 > `Prettier - Code formatter` 선택
- `edit format on save` 검색 > `Format On Save` 체크

<!-- prettier-ignore-end-->
