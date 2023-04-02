import 'dotenv/config';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
// server modules
import express from 'express';
import exphbs from 'express-handlebars';
// db modules
import { connectToMongo }  from './db/conn.js';
// Routers
import navRoutes from './routes/navigation.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
// Set static folder
app.use(express.static(__dirname + "/public"));
// Set handlebars as the app's view engine.
app.engine("hbs", exphbs.engine({
    extname: 'hbs'
}));
// Set express' default file extension for views as .hbs
app.set("view engine", "hbs");
// Set the directory for the views
app.set("views", "./views");
// Set view cache to false so browsers wouldn't save views into their cache
app.set("view cache", false);

// Assign routes. 
// Routers are objects which contain a compilation of route handlers. See link for more details: https://expressjs.com/en/4x/api.html#router
app.use(navRoutes);

// 404 not found page middleware. Think of app.use as something like app.(get/post/put/delete), 
// and if no route has been specified, it means that all requests must go through this handler, 
// unless the request had been intercepted (i.e., response has been sent) by a previous route handler. 
// The server will render the 404 page if none of the route handlers were able to intercept the request
app.use((req, res, err) => {
    res.render("404", {
        title: "404 not found"
    });
});

connectToMongo((err) => {
    if (err) {
        console.log(err);
        process.exit();
    }
    console.log("Successful connection");

    app.listen(process.env.SERVER_PORT, () => {
        console.log("server now listening...");
    })

});

