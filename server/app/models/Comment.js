module.exports = (sequelize, DataType) => {
    const Comment = sequelize.define("Comment", {
        id: {
            type: DataType.STRING,
            allowNull: false
        },
        videoId: {
            type: DataType.STRING,
            allowNull: false
        },
        accountId: {
            type: DataType.STRING,
            allowNull: false,
        },
        content: {
            type: DataType.STRING,
            allowNull: false
        },
        status: {
            type: DataType.NUMBER,
            allowNull: false
        }
    }
    );
    return Comment;
}