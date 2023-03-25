// const mongoose = require("mongoose");
// const Schema = mongoose.Schema

// const Channel = new Schema({

//     channelId: { type: String },
//     name: { type: String },
//     tagName: { type: String },
//     des: { type: String },
//     accountId: { type: String, default: "" },

// }, { timestamps: true })

// module.exports = mongoose.model('Channel', Channel)


module.exports = (sequelize, DataType) => {
    const Channel = sequelize.define("Channel", {
        id: {
            type: DataType.STRING,
            allowNull: true
        },
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
    return Channel;
}