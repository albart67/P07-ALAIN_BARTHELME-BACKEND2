const Sequelize = require('sequelize');

const sequelize = require("../database/db");
const Message = require("./Message")

const Comment = sequelize.define("comment", {
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

    messageId: {
        type: Sequelize.STRING,
        allowNull: false
    },

    comment: {
        type: Sequelize.STRING,
        allowNull: false
    },
});


// Comment.associate = models => {
//     Comment.belongsToo(models.Message, {
//         foreignKey: {
//             allowNull: false
//         }
//     })
// }





module.exports = Comment;