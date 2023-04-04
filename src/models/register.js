import { Schema, model, SchemaTypes} from "mongoose";

const registerSchema = new Schema({
    firstname: String,
    lastname: String,
    dateofregis: Date,
    numpeople: Number,
    email: String,
    number: Number,
    birthday: Date
});

const Register = model('register', registerSchema);

export default Register;
