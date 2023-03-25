module.exports = (sequelize, DataType) => {
    const Subcomment = sequelize.define("Subcomment", {
        id: {
            type: DataType.STRING,
            allowNull: false
        },
        CommentId: {
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
    return Subcomment;
}