//�鿣�� ���� �����ϸ� ���� ���� �۵��ϴ� �κ�

const express = require('express');		//express ��带 �����´� (package.json�� �ִ¤���)
const app = express();					//���ο� express��� ����
const port = 5000;						//��� ����

const mongoose = require('mongoose');

//������������{����ȿ��ִ°�}
mongoose.connect('mongodb+srv://dbUser:abcd1234@cluster0.cwusn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

//��Ʈ ���丮�� ���� ��ο��� ��� - localhost:5000�� ���
app.get('/', (req, res) => res.send('Hello World!~~'));

//��Ʈ 5000������ �� ���� console.log�� �ֿܼ� ����Ʈ
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
