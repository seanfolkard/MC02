import Register from "../models/register.js";
import User from "../models/user.js";
import Venue from "../models/venue.js";

const registerController = {
    postRegister: function(req, res) {
        console.log(req.body);
        Register.create(req.body);
    },
    fillvenue: function (req, res) {
        Venue.findById(req.query.venue).then(result => {
            const title = result['title'];
            User.findOne({_id: req.query.user}).lean().exec()
                .then(result => {
                    if (result == null) {
                        res.render('index', {
                            title: 'Home Page'
                        });
                    } else {
                        result.date = new Date;
                        result.venue = req.query.venue;
                        result.vtitle = title;
                        result.title = 'Register';
                        const date = new Date(result.birthday).toISOString().split('T')[0];
                        result.dob = date;
                        res.render('register', result);
                    }
                }
            );
        })
    }
}

export default registerController;