module.exports = (sequelize, DataType) => {
    const Like = sequelize.define("Like", {
        videoId: {
            type: DataType.STRING,
            allowNull: false
        },
        accountId: {
            type: DataType.STRING,
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