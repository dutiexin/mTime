var express = require('express');
var router = express.Router();
var UserModel = require("../model/UserModel.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
	UserModel.find({username: req.body.user, psw: req.body.psw}, (err, docs)=>{
		var result = {
			code: 1,
			message:'登陆成功'
		}
		if(err || docs.length == 0) {
			result.code = -110;
			result.message = "登录失败";
		}

		res.send(JSON.stringify(result));
	})
});

router.post('/regist',function(req, res, next){
	UserModel.find({username: req.body.user},function (err, docs) {
		if(docs.length > 0) {
			res.send("该用户已经被注册");
			return;
		}
		let user = new UserModel();
		user.username = req.body.username;
		user.psw = req.body.psw;
		user.save((err)=>{
			if(err) {
				res.send("注册失败");
			} else {
				res.send("注册成功");
			}
		});
	});

})

module.exports = router;
