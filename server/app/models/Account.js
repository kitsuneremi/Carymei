// import { Schema as _Schema, model } from "mongoose";
// const Schema = _Schema

// const Account = new Schema({
//     email: {type: String, required: true},
//     name: { type: String },
// }, { timestamps: true })

// export default model('Account', Account)

module.exports = (sequelize, DataType) => {
    const Account = sequelize.define("Account", {
        id:{
            type: DataType.STRING,
            allowNull: false,
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true
            }
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        settingId: {
            type: DataType.STRING,
            allowNull: true,
        }
        
    }
    );
    return Account;
}