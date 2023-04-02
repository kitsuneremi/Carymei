module.exports = (sequelize, DataType) => {
    const DetailListVideos = sequelize.define("DetailListVideos", {
        videoId: {
            type: DataType.NUMBER,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true
            }
        },
        listId: {
            type: DataType.NUMBER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    }
    );
    return DetailListVideos;
}