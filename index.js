//�鿣�� ���� �����ϸ� ���� ���� �۵��ϴ� �κ�

const express = require('express');		//express ��带 �����´� (package.json�� �ִ¤���)
const app = express();					//���ο� express��� ����
const port = 5000;						//��� ����
const bodyParser = require('body-parser');
const { User } = require("./models/User");

//application/x-www-form-urlencoded�� �м��ؼ� ������ �� �ֵ��� ��
app.use(bodyParser.urlencoded({extended: true}));

//application/json�� �м��ؼ� ������ �� �ֵ��� ��
app.use(bodyParser.json());

const mongoose = require('mongoose');

const config = require('./config/key');
//������������{����ȿ��ִ°�}
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

//��Ʈ ���丮�� ���� ��ο��� ��� - localhost:5000�� ���
app.get('/', (req, res) => res.send('Hello World!~~nodemontest!!!222'));

//ȸ�������� ���� route ����
app.post("/register", (req, res) => {
	//�ʿ��� �������� client���� �������� �װ͵��� database�� �����Ѵ�.
	//user model�� ������ �����´�.
	const user = new User(req.body);

	user.save((err, userInfo) => {
		if(err) return res.json({success: false, err});
		return res.status(200).json({success: true});
	});
});

//��Ʈ 5000������ �� ���� console.log�� �ֿܼ� ����Ʈ
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
