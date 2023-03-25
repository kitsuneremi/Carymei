// import { Schema as _Schema, model } from "mongoose";
// const Schema = _Schema

// const ListCategoryVideo = new Schema({
//     videoId: { type: String },
//     categoryId: { type: String },
// })

// export default model('ListCategoryVideo', ListCategoryVideo)

module.exports = (sequelize, DataType) => {
    const ListCategoryVideo = sequelize.define("ListCategoryVideo", {
        videoId: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true
            }
        },
        categoryId: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }
    );
    return ListCategoryVideo;
}