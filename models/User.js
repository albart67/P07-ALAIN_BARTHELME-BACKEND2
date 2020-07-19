const Sequelize = require('sequelize')
//const db = require('../database/db.js')

const sequelize = require("../database/db");

const User = sequelize.define("user",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
);








// User = db.sequelize.define(
//   'user',
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     first_name: {
//       type: Sequelize.STRING
//     },
//     last_name: {
//       type: Sequelize.STRING
//     },
//     email: {
//       type: Sequelize.STRING
//     },
//     password: {
//       type: Sequelize.STRING
//     },
//     created: {
//       type: Sequelize.DATE,
//       defaultValue: Sequelize.NOW
//     }
//   },
//   {
//     timestamps: false
//   }
// )

// User.associate = models => {
//   User.hasMany(models.Message, {
//     onDelete: "cascade"
//   });
// };

module.exports = User;

