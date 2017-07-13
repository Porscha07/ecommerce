var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//include config file. go up from routes and down into config.
var config = require('../Config/config');
//include bycrypt for hashing and checking password
var bcrpyt =require('bcrypt-nodejs')
//include  randToken for....(see GH)
var randToken = require('rand-token')
//set up the connection with options.
var connection = mysql.createConnection({
	host:config.host,
	user:config.user,
	password:config.password,
	database:config.database
});
//actually make the connection
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/productlines/get',(req,res)=>{
	const selectQuery ="SELECT * FROM productlines"
	connection.query(selectQuery,(error,results,fields)=>{
		if(error){
			res.json(error)
		}else{
			res.json(results);
		}
	})
})

/* GET Register page */
router.post('/register',(req,res)=>{
	const name = req.body.name;
	const email = req.body.email;
	const accountType ='customer';
	const password = bcrpyt.hashSync(req.body.password);
	const city = req.body.city;
	const state = req.body.state;
	var insertQuery ="INSERT INTO users (type,password) VALUES (?,?)";
	connection.query(insertQuery,[accountType,password],(error,results)=>{
		if(error){
			res.json({
				msg: error
			})
		}else{
			res.json({
				msg: 'userInserted'
			})
		}
		
	})

})

module.exports = router;
