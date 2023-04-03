import User from "../models/user.js";

const usersController = {
    /**
     * Expects email and password
     * Usage:
     * fetch(`/api/auth?email=${email_var}&password=${password_var}`) // async use .then()
     */
    authenticateUser: function(req, res) {
        const email = req.query.email;
        const pass = req.query.password;
        User.findOne({email:email, password:pass}).lean().exec().then(result => {
            if (result == null) {
                res.json('');
            } else {
                res.json(result);
            }
        });
    },

    /**
     * Creates new user in database
     * TODO: validation
     */
    postUser: function(req, res) {
        User.create(req.body);
    }

    /**
     * TODO: Past Registrations
     */

    /**
     * TODO: Update User
     */
}

export default usersController;