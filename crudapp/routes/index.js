var express = require('express');
var router = express.Router();
var connection =require("../config/connection")


/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query("SELECT * FROM users",function(err,rows){
    if(err) throw err

    res.render('index', {users:rows});


  })



  
});

// add data
router.post("/addUser",function(req,res){
  const userdata={
    fname:req.body.fname,
    lname:req.body.lname,
    email:req.body.email,
    profession:req.body.profession
  }

  connection.query("INSERT INTO users SET ?",userdata,function(err,result){
    if(err) throw err
    res.redirect("/")

  })

})


router.get("/deleteUser/:id",function(req,res){
  var userid =req.params.id
  connection.query("DELETE FROM users WHERE id=?",[userid],function(err,rows){
    if(err) throw err
    res.redirect("/")

  })

})

// get data to form 
router.get("/editUser/:id",function(req,res){
  var userid =req.params.id
  connection.query("SELECT * FROM users WHERE id=?",[userid],function(err,rows){
    if(err) throw err
    res.render("edit",{userdata:rows})

  })

  
})

// update 

router.post("/updateUser/:id",function(req,res){
  var id =req.params.id
  
  var fname=req.body.fname
  var lname =req.body.lname
  var email =req.body.email
  var profession =req.body.profession

  connection.query("UPDATE users SET fname=?,lname=?,email=?,profession=? WHERE id=?",[fname,lname,email,profession,id],function(err,result){

    if(err) throw err
    res.redirect("/")
    

  })

})








module.exports = router;
