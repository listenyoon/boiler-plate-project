const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	name : {
		type : String,
		maxlength : 50
	},
	email : {
		type : String,
		trim : true
	},
	password: {
		type : String,
		maxlength : 50
	},
	role : {
		type : Number,
		default : 0
	},
	image: String,
	token:{
		type : String
	},
	tokenExp:{
		type: Number
	}
})

const User = mongoose.model('User', userSchema);

//모듈을 다른 곳에서도 사용할 수 있도록 export 해줌.
module.exports = {User};