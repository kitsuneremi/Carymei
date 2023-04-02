module.exports = (sequelize, DataType) => {
    const Comments = sequelize.define("Comments", {
        id: {
            type: DataType.NUMBER,
            allowNull: false,
            primaryKey: true
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
    return Comments;
}