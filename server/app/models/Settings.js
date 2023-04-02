module.exports = (sequelize, DataType) => {
    const Settings = sequelize.define("Settings", {
        id: {
            type: DataType.NUMBER,
            allowNull: false,
            primaryKey: true
        },
        accountId: {
            type: DataType.NUMBER,
            allowNull: false
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
        },
        value: {
            type: DataType.STRING,
            allowNull: false,
        }
    }
    );
    return Settings;
}