import {Request,Express} from 'express'
import { VerifyCallback } from 'passport-google-oauth2';
import passport from "passport";
import GoogleStrategy from "passport-google-oauth2"

const Strategy = GoogleStrategy.Strategy
const GOOGLE_CLIENT_ID = "62587936828-h9uhqekrj65qcnajf1g1ilkvqlbnpuk7.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"
passport.use(new Strategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback:true
  },
  function(request:Request, accessToken:string, refreshToken:string, profile:any, done:VerifyCallback) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
    console.log(profile,accessToken,refreshToken)
    return done(null,profile)
  }
));

passport.serializeUser(function(user,done){
    return done(null,user)
})
passport.deserializeUser(function(user,done){
    return done(null,user as Express.User)
})