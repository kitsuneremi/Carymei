module.exports = (sequelize, DataType) => {
    const Notifications = sequelize.define("Notifications", {
        id: {
            type: DataType.NUMBER,
            allowNull: false,
            primaryKey: true
        },
        accountId: {
            type: DataType.NUMBER,
            allowNull: false
        },
        channelId: {
            type: DataType.NUMBER,
            allowNull: false,
        },
        title: {
            type: DataType.STRING,
            allowNull: false
        },
        status: {
            type: DataType.NUMBER,
            allowNull: false,
            defaultValue: 0
        }
    }
    );
    return Notifications;
}