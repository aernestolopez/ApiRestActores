/**
 * Creacion del server de la api rest
 * @author ernesto
 */
import express from 'express';
import route from "../routes/route";
import session from "express-session";
const app=express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'ejs');

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET' 
}));

app.get('/', function(req, res) {
  res.render('pages/auth');
});

const port = 1289;
app.listen(port , () => console.log('Escuchando en el puerto ' + port));


var passport = require('passport');
var userProfile: any;
 
app.use(passport.initialize());
app.use(passport.session());
 
app.get('/success', (req, res) => {
  res.render('pages/success', {user: userProfile});
});
app.get('/error', (req, res) => res.send("Error en el inicio de Sesión"));
 
passport.serializeUser(function(user: any, cb: (arg0: null, arg1: any) => void) {
  cb(null, user);
});
 
passport.deserializeUser(function(obj: any, cb: (arg0: null, arg1: any) => void) {
  cb(null, obj);
});

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '310325753062-7p4dmf74goa9vg2i073b3kgi63i121oh.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:1289/auth/google/callback"
  },
  function(accessToken: any, refreshToken: any, profile: any, done: (arg0: null, arg1: any) => any) {
      userProfile=profile;
      return done(null, userProfile);
  }
));
 
app.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    app.use(route)
    res.redirect('/success');
  });