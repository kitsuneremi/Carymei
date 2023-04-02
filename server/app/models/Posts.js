module.exports = (sequelize, DataType) => {
    const Posts = sequelize.define("Posts", {
        id: {
            type: DataType.NUMBER,
            allowNull: true,
            primaryKey: true
        },
        channelId: {
            type: DataType.NUMBER,
            allowNull: false,
        },
        des: {
            type: DataType.STRING,
            allowNull: true,
        },
        title: {
            type: DataType.STRING,
            allowNull: true
        }
    }
    );
    return Posts;
}