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
	const salesRep = req.body.salesRep;
	var creditLimit = 16000000
	//we want to insert the user into two tables( customers and users)
	//users need the customernumber from the customer table
	//therefore we need to insert the user into customers first...
	//get the ID created by that insert, THEN insert the users into Users...
	//customers insert query
	var insertIntoCust = "INSERT INTO customers (customerName,city,state,creditLimit,salesRepEmployeeNumber) VALUES (?,?,?,?,?)";
	//rul the query(for now autoset the sales rep to 1337)
	connection.query(insertIntoCust,[name,city,state,creditLimit,1337],(error,results)=>{
		console.log(results);
	//get the ID that was used in the customer insert.
		const newId = results.insertId;
		console.log(results)
		//get the current time stamp
		var currTimeStamp = Date.now() / 1000;
		//set up a token for this user. we will give this back to React.
		var token = randToken.uid(40);
			//user insert query
		var insertQuery ="INSERT INTO users (uid,type,password,created,token) VALUES (?,?,?,?,?)";
		//run the query. Use error2 and results 2 because you already used error and results.
		connection.query(insertQuery,[newId,accountType,password,currTimeStamp,token],(error2,results2)=>{
		 			if(error){
				res.json({
					msg: error2
				})
			}else{
				res.json({
					msg: 'userInserted',
					token: token
				})
			}
			
		})
	})
})



module.exports = router;
