import Register from "../models/register.js";

const registerController = {
    postRegister: function(req, res) {
        Register.create(req.body);
    }
}

export default registerController;