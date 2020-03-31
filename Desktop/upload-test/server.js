const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const api = require('./routes/user.routes');
const PORT = process.env.PORT || 4000;

// DB CONNECTION
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://test:test@test-itudz.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const connection = mongoose.connection;
connection.once('open', () => console.log('DB is connected'));

// Middlewares && app init
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.use('/public', express.static('public'))

app.use('/api', api);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, () => console.log(`Server is up on port ${PORT}`));

app.use(function (err, req, res, next){
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})