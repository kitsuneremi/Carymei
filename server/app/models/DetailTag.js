module.exports = (sequelize, DataType) => {
    const DetailTags = sequelize.define("DetailTags", {
        videoId: {
            type: DataType.NUMBER,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true
            }
        },
        tagId: {
            type: DataType.NUMBER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }
    );
    return DetailTags;
}