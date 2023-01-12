const express = require("express");
const mysql = require('mysql2')
const bodyparser = require('body-parser')
const jsonparser = bodyparser.json();

const app = express();

const cors =require('cors')
app.use(cors())

//Database connection
const connection = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"Root",
   database:"employeeDB"
});

//READ  Operation
app.get('/',(req,res)=>{
 res.send("Hii! Welcome to Backend Server")
})


// API
// getData
app.get('/getEmployee',(req,res)=>{
    connection.query("select * from employeeDetails order by 1;", (err,result)=>{
        if(!err){
            res.send(result)
        }
        else{
            console.log(err)
        }
    })
})


//Create -- POST
app.post('/addEmployee',jsonparser,(req,res)=>{
    Emp_id = req.body.id
    Emp_name = req.body.nm
    Mobile_no = req.body.mobile
    Address = req.body.addr
    connection.query(`insert into employeeDetails values(${Emp_id},'${Emp_name}',${Mobile_no},'${Address}');`, (err,result)=>{
        if(!err){
            res.send(result)
        }
        else{
            console.log(err)
        }
    })
})


//Update - PUT
app.put('/updateEmployee/:id',jsonparser,(req,res)=>{
    Id = req.params.id

    Address = req.body.addr
    connection.query(`update employeeDetails set Address='${Address}' where Emp_id=${Id};`, (err,result)=>{
        if(!err){
            res.send(result)
        }
        else{
            console.log(err)
        }
    })
})


//Delete
app.delete('/delEmployee/:id',(req,res)=>{
    Id = req.params.id
    connection.query(`delete from employeeDetails where Emp_id=${Id};`, (err,result)=>{
        if(!err){
            res.send(result)
        }
        else{
            console.log(err)
        }
    })
})

app.listen(3000);