// import { Schema as _Schema, model } from "mongoose";
// const Schema = _Schema

// const Category = new Schema({
//     name: { type: String },
// })

// export default model('Category', Category)

module.exports = (sequelize, DataType) => {
    const Category = sequelize.define("Category", {
        id: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }
    );
    return Category;
}