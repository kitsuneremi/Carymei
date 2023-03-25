module.exports = (sequelize, DataType) => {
    const CustomListVideo = sequelize.define("CustomListVideo", {
        id: {
            type: DataType.STRING,
            allowNull: false
        },
        videoId: {
            type: DataType.STRING,
            allowNull: false
        },
        accountId: {
            type: DataType.STRING,
            allowNull: false,
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        }
    }
    );
    return CustomListVideo;
}