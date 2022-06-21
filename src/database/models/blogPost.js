const { NOW } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn(NOW),
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn(NOW),
    }
  },
  {
    timestamps: false
  }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      {foreignKey: 'userId', as: 'Users'}
    )
  }

  return BlogPost;
}
