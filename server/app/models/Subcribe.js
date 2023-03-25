module.exports = (sequelize, DataType) => {
    const Subcribe = sequelize.define("Subcribe", {
        accountId: {
            type: DataType.STRING,
            allowNull: false
        },
        channelId: {
            type: DataType.STRING,
            allowNull: false,
        }
    }
    );
    return Subcribe;
}