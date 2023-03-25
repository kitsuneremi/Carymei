module.exports = (sequelize, DataType) => {
    const Notification = sequelize.define("Notification", {
        id: {
            type: DataType.STRING,
            allowNull: false
        },
        accountId: {
            type: DataType.STRING,
            allowNull: false
        },
        channelId: {
            type: DataType.STRING,
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
    return Notification;
}