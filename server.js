const express = require('express')
const bcrypt = require('bcrypt')
const saltRounds = 15
const app = express()

const jwt = require('jsonwebtoken')
const SECRET_KEY = 'gyyu6778y8nhyuh6787y67'    //constant value


//hashing---in registering
//1.generate salt,salt will be use to hash the pass
app.post('/register', (req, res) => {
    // const pass='yghj'
    // console.log(req.query)
    // bcrypt.genSalt(saltRounds,(err,salt)=>{
    //     if(err) console.log(err)
    //     else{ 
    //         bcrypt.hash(req.query.password,salt,(err,hashPswd)=>{
    //             if(err) console.log(err)
    //             else console.log("hashpass",hashPswd)
    //         })
    //         // console.log('SALT',salt)
    //     }
    // })//three para



    //new
    bcrypt.hash(req.query.password, saltRounds, (err, hashpass) => {
        if (err) console.log(err)
        else console.log('HASSED PSWD : ', hashpass)
    })
    res.send({
        status: 'user register'
    })
})
//for login
app.post('/login', (req, res) => {
    console.log(req.query)
    const tokan=jwt.sign(req.query,SECRET_KEY)//not only about pass   COMPLITE OBJECT   token can be decoded
    res.send({
        tokan:tokan
    })
    
    console.log(tokan)

    const decodeUser=jwt.decode(tokan,SECRET_KEY);
    console.log(decodeUser)
})



app.listen(5000, () => {
    console.log('server is running........')
})


//bcrypt:
// 1.we will be creating a soltRound variable which will define how much complex
// hashing you wont for yourtext.ideal value ranges from 5 - 15.

// 2.bcrypt firstly generate a salt  using genSalt function which taken in saltRaound and callback
// function as a parameter, this function returns the saltRounds.

// 3.after  this bcrypt hash the value using salt by hash function, this function takes
// in three params first is text and salt and callback function. this callback function
// will give you hashedpassword. 
