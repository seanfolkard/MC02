import express from 'express';
import usersController from '../controllers/usersController.js'
import venuesController from '../controllers/venuesController.js';
import registerController from '../controllers/registerController.js';

const navRoutes = express.Router();

navRoutes.get('/', (req, res) => {
    res.redirect('/login');
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

navRoutes.get('/forgotpass', function(req, res) {
    res.render('forgotpass', {
        title: 'Forgot Password'
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
navRoutes.get('/api/venues', venuesController.getAll);
navRoutes.get('/api/fillvenue', registerController.fillvenue);
navRoutes.post('/api/postreg', registerController.postRegister);

export default navRoutes;
