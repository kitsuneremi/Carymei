module.exports = (sequelize, DataType) => {
    const Subcomments = sequelize.define("Subcomments", {
        id: {
            type: DataType.NUMBER,
            allowNull: false,
            primaryKey: true
        },
        commentId: {
            type: DataType.NUMBER,
            allowNull: false
        },
        accountId: {
            type: DataType.NUMBER,
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
    return Subcomments;
}