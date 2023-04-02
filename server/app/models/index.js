// index.js
const { Sequelize } = require('sequelize');
const sequelize = require('../../config/connect/connect');
const Notifications = require('./Notifications.js');
// Import models from different files
const Account = require('./Accounts.js')(sequelize, Sequelize.DataTypes);
const Category = require('./Categories.js')(sequelize, Sequelize.DataTypes);
const Channel = require('./Channels.js')(sequelize, Sequelize.DataTypes);
const Comment = require('./Comments.js')(sequelize, Sequelize.DataTypes);
const CustomListVideo = require('./CustomListVideos.js')(sequelize, Sequelize.DataTypes);
const Like = require('./Like.js')(sequelize, Sequelize.DataTypes);
const ListCategoryVideo = require('./ListCategoryVideos.js')(sequelize, Sequelize.DataTypes);
const Notification = require('./Notifications.js')(sequelize, Sequelize.DataTypes);
const Post = require('./Posts.js')(sequelize, Sequelize.DataTypes);
const Setting = require('./Settings.js')(sequelize, Sequelize.DataTypes);
const Subcomment = require('./Subcomments.js')(sequelize, Sequelize.DataTypes);
const Subcribe = require('./Subcribes.js')(sequelize, Sequelize.DataTypes);
const Tag = require('./Tags.js')(sequelize, Sequelize.DataTypes);
const Video = require('./Videos.js')(sequelize, Sequelize.DataTypes);
const DetailTag = require('./DetailTag.js')(sequelize, Sequelize.DataTypes);
const ListVideo = require('./ListVideos.js')(sequelize, Sequelize.DataTypes);
const DetailListVideo = require('./DetailListVideo.js')(sequelize, Sequelize.DataTypes);

// Create associations

Setting.belongsTo(Account);

Account.hasMany(Setting, {foreignKey: 'accountId'});
Account.hasMany(Subcribe, {foreignKey: 'accountId'});
Account.hasOne(Channel, {foreignKey: 'accountId'});
Account.hasMany(Notification, {foreignKey: 'accountId'});
Account.hasMany(Like, {foreignKey: 'accountId'});
Account.hasMany(Comment, {foreignKey: 'accountId'});
Account.hasMany(Subcomment, {foreignKey: 'accountId'});

// Notification.belongsTo(Account);
// Notification.belongsTo(Channel);

Channel.hasMany(Subcribe, {foreignKey: 'channelId'});
Channel.hasMany(Video, {foreignKey: 'channelId'});
Channel.hasMany(ListVideo, {foreignKey: 'channelId'});
Channel.hasMany(Post, {foreignKey: 'channelId'});
// Channel.belongsTo(Account);

// Subcribe.belongsTo(Account);
// Subcribe.belongsTo(Channel);

Video.hasMany(DetailTag, {foreignKey: 'videoId'});
Video.hasMany(Like, {foreignKey: 'videoId'});
Video.hasMany(Comment, {foreignKey: 'videoId'});
// Video.belongsTo(Channel);
// Video.belongsTo(DetailListVideo);
// Video.belongsTo(ListCategoryVideo); 

Tag.hasMany(DetailTag, {foreignKey: 'tagId'});

// DetailTag.belongsTo(Video);
// DetailTag.belongsTo(Tag);

ListVideo.hasMany(DetailListVideo, {foreignKey: 'listVideoId'});
// ListVideo.belongsTo(Channel);

// DetailListVideo.hasOne(Video)
// DetailListVideo.belongsTo(ListVideo);

// Post.belongsTo(Channel);

Video.hasMany(ListCategoryVideo, {foreignKey: 'listId'});

ListCategoryVideo.hasOne(Category, {foreignKey: 'listId'});
// ListCategoryVideo.hasOne(Video);

// Export models and sequelize instance
module.exports = {
  Account,
  Category,
  Channel,
  Post,
  Setting,
  Subcribe,
  Tag,
  Video,
  DetailTag,
  ListVideo,
  DetailListVideo,
  sequelize
};