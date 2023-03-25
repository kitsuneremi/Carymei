// const mongoose = require("mongoose");
// const Schema = mongoose.Schema 

// const Video = new Schema({
//     title: { type: String },
//     des: { type: String },
//     view: { type: String },
//     tag: { type: String },
//     status: { type: String },
//     videoId: { type: String },
//     channelTagName: { type: String },
//     channelName: { type: String },
// }, { timestamps: true })

// module.exports = mongoose.model('Video', Video)


module.exports = (sequelize, DataType) => {
    const Video = sequelize.define("Video", {
        title: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true
            }
        },
        des: {
            type: DataType.STRING,
            allowNull: true,
        },
        view: {
            type: DataType.NUMBER,
            defaultValue: 0
        },
        tagId: {
            type: DataType.STRING,
            allowNull: true,
        },
        status: {
            type: DataType.NUMBER,
            allowNull: false,
        }
    }
    );
    return Video;
}