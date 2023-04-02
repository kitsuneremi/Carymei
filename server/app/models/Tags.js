module.exports = (sequelize, DataType) => {
    const Tags = sequelize.define("Tags", {
        id: {
            type: DataType.NUMBER,
            allowNull: false,
            primaryKey: true
        },
        Name: {
            type: DataType.STRING,
            allowNull: false,
        }
    }
    );
    return Tags;
}