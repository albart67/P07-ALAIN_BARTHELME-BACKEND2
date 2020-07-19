var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const User = require("./models/User");
const Message = require("./models/Message");
const Comment = require("./models/comment");
const sequelize = require("./database/db");


var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Messages = require('./routes/messages')
var Users = require('./routes/Users')
var Comments = require('./routes/comment')

// User.hasMany(Message);
// Message.belongsTo(User);

// Message.hasMany(Comment);
// Comment.belongsTo(Message);



app.use('/users', Users)
app.use('/api', Messages)
app.use('/api', Comments)

//Association des models





app.listen(port, function () {
  console.log('Server is running on port: ' + port)
})

test()
async function test() {
  await sequelize.sync({ force: true });
  await User.create({
    fist_name: "Alain2",
    last_name: 'barthel',
    email: 'nouvovnus@hotmail45.fr',
    password: "1234",
  })
}


