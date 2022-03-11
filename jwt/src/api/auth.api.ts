import express,{Express,Request,Response} from 'express'
import passport from 'passport'

class Auth{
    app:Express

    constructor(app:Express){
        this.app = app

        this.initializeRoute()
    }

    initializeRoute(){
        this.app.get('/api/auth',passport.authenticate('jwt',{session:false}),(req:Request,res:Response)=>{
            res.send('hello')
        })
    }
}

export default Auth