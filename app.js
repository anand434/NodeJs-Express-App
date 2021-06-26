const mongoose = require('mongoose');
const express = require('express');
const bodyPar = require('body-parser');
require('dotenv/config');


const app = express();
const postRoute = require('./routes/posts');

//middlewares
// app.use('/post', 
//     () => { console.log('this is middleware') }
// );
app.use(bodyPar.json());
app.use('/posts', postRoute);


// routes
app.get('/', (req, res) => {
    res.send('Hello');
});





// db connection
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true},
    ()=>{ console.log('connected to db.'); }
);


// start listening
app.listen(3000);


