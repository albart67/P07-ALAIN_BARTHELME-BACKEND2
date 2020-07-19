const Sequelize = require('sequelize');

const sequelize = require("../database/db");

const Message = sequelize.define("message", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  userId: {
    type: Sequelize.STRING,
    allowNull: false
  },

  message: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
  {
    timestamps: false
  },
);




// const Sequelize = require("sequelize");
// const db = require("../database/db.js");
User = require("./User")

// Message = db.sequelize.define(
//   "message",
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     message: {
//       type: Sequelize.STRING
//     }
//   },
//   {
//     timestamps: false
//   },
// );



// Message.associate = models => {
//   Message.belongsToo(models.User, {
//     foreignKey: {
//       allowNull: false
//     }
//   })
// }

// Message.associate = models => {
//   Message.hasMany(models.Comment, {
//     onDelete: "cascade"
//   });
// };


module.exports = Message


