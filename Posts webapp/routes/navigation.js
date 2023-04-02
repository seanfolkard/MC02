import express from 'express';

const navRoutes = express.Router();

navRoutes.get('/', (req, res) => {
    res.redirect('/home');
});

navRoutes.get('/home', function (req, res) {
 
    // Rendering home.ejs page
    res.render("index", {
        title: "Home Page"
    });
});

navRoutes.get('/list', function (req, res) {
 
    // Rendering home.ejs page
    res.render("list", {
        title: "Listings"
    });
});

navRoutes.get('/register', function (req, res) {
 
    // Rendering home.ejs page
    res.render("register", {
        title: "Register"
    });
});

navRoutes.get('/profile', function (req, res) {
 
    // Rendering home.ejs page
    res.render("profile", {
        title: "Profile"
    });
});

navRoutes.get('/about', function (req, res) {
 
    // Rendering home.ejs page
    res.render("index", {
        title: "About"
    });
});

export default navRoutes;