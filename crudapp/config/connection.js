var mysql = require('mysql')

var con

var settings = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'crudapp'
}

function connectDatabase(){

    if(!con){
        con=mysql.createConnection(settings)
        con.connect(function(err){
            if(!err){
                console.log("Database Connected")
            }else{
                console.log("Database not Connected :",err)
            }
        })

         
    }
    return con



}

module.exports =connectDatabase()