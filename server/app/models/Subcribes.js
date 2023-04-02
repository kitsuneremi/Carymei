module.exports = (sequelize, DataType) => {
    const Subcribes = sequelize.define("Subcribes", {
        accountId: {
            type: DataType.NUMBER,
            allowNull: false
        },
        channelId: {
            type: DataType.NUMBER,
            allowNull: false,
        }
    }
    );
    return Subcribes;
}