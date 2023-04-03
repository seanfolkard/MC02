import express from 'express';
import usersController from '../controllers/usersController.js'

const navRoutes = express.Router();

navRoutes.get('/', (req, res) => {
    res.redirect('/home');
});

navRoutes.get('/home', function (req, res) {
    res.render("index", {
        title: "Home Page"
    });
});

navRoutes.get('/list', function (req, res) {
    res.render("list", {
        title: "Listings"
    });
});

navRoutes.get('/register', function (req, res) {
    res.render("register", {
        title: "Register"
    });
});

navRoutes.get('/profile', function (req, res) {
    res.render("profile", {
        title: "Profile"
    });
});

navRoutes.get('/about', function (req, res) {
    res.render("index", {
        title: "About"
    });
});

navRoutes.get('/login', function(req, res) {
    res.render('login', {
        title: 'Login'
    });
});

navRoutes.get('/signup', function (req, res) {
    res.render('newacct', {
        title: 'Sign Up',
        stylesheet: [
            "css/style.css",
            "css/newacct.css"
        ],
        javascript: [
            "js/newacct.js"
        ]
    });
});

navRoutes.get('/api/auth', usersController.authenticateUser);

export default navRoutes;