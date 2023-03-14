"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creacion del server de la api rest
 * @author ernesto
 */
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("../routes/route"));
const express_session_1 = __importDefault(require("express-session"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(route_1.default);
app.set('view engine', 'ejs');
app.use((0, express_session_1.default)({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET'
}));
app.get('/', function (req, res) {
    res.render('pages/auth');
});
const port = 1289;
app.listen(port, () => console.log('Escuchando en el puerto ' + port));
var passport = require('passport');
var userProfile;
app.use(passport.initialize());
app.use(passport.session());
app.get('/success', (req, res) => {
    res.render('pages/success', { user: userProfile });
});
app.get('/error', (req, res) => res.send("Error en el inicio de Sesión"));
passport.serializeUser(function (user, cb) {
    cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});
/*  Google AUTH  */
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '310325753062-7p4dmf74goa9vg2i073b3kgi63i121oh.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:1289/auth/google/callback"
}, function (accessToken, refreshToken, profile, done) {
    userProfile = profile;
    return done(null, userProfile);
}));
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/error' }), function (req, res) {
    // Successful authentication, redirect success.
    res.redirect('/success');
});
