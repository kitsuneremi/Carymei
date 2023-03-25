module.exports = (sequelize, DataType) => {
    const Setting = sequelize.define("Setting", {
        id: {
            type: DataType.STRING,
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
    return Setting;
}