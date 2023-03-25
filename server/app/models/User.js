module.exports = (sequelize, DataType) => {
    const User = sequelize.define("User", {
        Username: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        Password: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }
    );
    return User;
}