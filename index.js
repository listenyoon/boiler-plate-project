//백엔드 서버 시작하면 제일 먼저 작동하는 부분

const express = require('express');		//express 모드를 가져온다 (package.json에 있는ㄴ거)
const app = express();					//새로운 express모드 생성
const port = 5000;						//상관 없음
const bodyParser = require('body-parser');
const { User } = require("./models/User");

//application/x-www-form-urlencoded를 분석해서 가져올 수 있도록 함
app.use(bodyParser.urlencoded({extended: true}));

//application/json을 분석해서 가져올 수 있도록 함
app.use(bodyParser.json());

const mongoose = require('mongoose');

const config = require('./config/key');
//에러방지문구{여기안에있는거}
mongoose
	.connect(config.mongoURI, 
			{
				useNewUrlParser: true, 
				useUnifiedTopology: true, 
				useCreateIndex: true, 
				useFindAndModify: false
			}
	)
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));

//루트 디렉토리에 오면 헬로월드 출력 - localhost:5000에 출력
app.get('/', (req, res) => res.send('Hello World!~~nodemontest!!!222'));

//회원가입을 위한 route 생성
app.post("/register", (req, res) => {
	//필요한 정보들을 client에서 가져오면 그것들을 database에 저장한다.
	//user model의 정보를 가져온다.
	const user = new User(req.body);

	user.save((err, userInfo) => {
		if(err) return res.json({success: false, err});
		return res.status(200).json({success: true});
	});
});

//포트 5000번에서 앱 실행 console.log는 콘솔에 프린트
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
