module.exports = (sequelize, DataType) => {
    const ListVideos = sequelize.define("ListVideos", {
        id: {
            type:DataType.NUMBER,
            allowNull: false,
            primaryKey: true
        },
        channelId: {
            type: DataType.NUMBER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
        }
    }
    );
    return ListVideos;
}