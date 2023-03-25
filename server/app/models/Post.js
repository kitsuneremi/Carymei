module.exports = (sequelize, DataType) => {
    const Post = sequelize.define("Post", {
        id: {
            type: DataType.STRING,
            allowNull: true
        },
        channelId: {
            type: DataType.STRING,
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
    return Post;
}