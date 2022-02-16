const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const users = require('./routes/api/users');
const bugs = require('./routes/api/bugs');
const deadBugs = require('./routes/api/deadBugs');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = 'mongodb+srv://user:user@cluster0.qsmmt.mongodb.net/entomology?retryWrites=true&w=majority';

async function connectToDB() {
    try {
        await mongoose.connect(db);
        console.log('Connected');
    }
    catch (err) {
        console.log(err);
    }
}

connectToDB();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
else {
    app.use('/api/users', users);
    app.use('/api/bugs', bugs);
    app.use('/api/deadBugs', deadBugs);
}

app.listen(process.env.PORT || 3001);