module.exports = (sequelize, DataType) => {
    const Like = sequelize.define("Like", {
        videoId: {
            type: DataType.NUMBER,
            allowNull: false,
        },
        accountId: {
            type: DataType.NUMBER,
            allowNull: false,
        },
        type: {
            type: DataType.NUMBER,
            allowNull: false
        }
    }
    );
    return Like;
}