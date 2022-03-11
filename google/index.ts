import express,{Request,Response} from 'express'
import passport from 'passport'
require('./src/middleware/passport')


const app = express()

app.get('/',(req:Request,res:Response)=>{
    res.send("<a href='/auth/google'>Auth by google</a>")
})

app.get('/auth/google',passport.authenticate('google',{scope:['email','profile']} ))

app.get('/google/callback',passport.authenticate('google',{
    successRedirect:'/protected',
    failureRedirect:'/auth/failure'
}))

app.get('/protected',(req:Request,res:Response)=>{
    res.send("hello")
})
app.get('/auth/failure',(req:Request,res:Response)=>{
    res.send("hello")
})

app.listen(3000,()=>{
    console.log('App runing at',3000)
})