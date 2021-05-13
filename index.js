//백엔드 서버 시작하면 제일 먼저 작동하는 부분

const express = require('express');		//express 모드를 가져온다 (package.json에 있는ㄴ거)
const app = express();					//새로운 express모드 생성
const port = 5000;						//상관 없음

const mongoose = require('mongoose');

//에러방지문구{여기안에있는거}
mongoose.connect('mongodb+srv://dbUser:abcd1234@cluster0.cwusn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

//루트 디렉토리에 오면 헬로월드 출력 - localhost:5000에 출력
app.get('/', (req, res) => res.send('Hello World!~~'));

//포트 5000번에서 앱 실행 console.log는 콘솔에 프린트
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
