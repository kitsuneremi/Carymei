module.exports = (sequelize, DataType) => {
    const Tag = sequelize.define("Tag", {
        id: {
            type: DataType.STRING,
            allowNull: false
        },
        Name: {
            type: DataType.STRING,
            allowNull: false,
        }
    }
    );
    return Tag;
}