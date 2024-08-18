
const express = require('express');
const mongoose = require('mongoose');

const cors=require('cors')
const cardRoutes=require('./routes/cards')

const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/Abstract')
.then(() => console.log('DB connected'))
.catch(err => console.error('DB connection error:', err));

// Middleware
app.use(express.json());
app.use(cors())
// Route
app.use('/cards', cardRoutes);

// Check Endpoint
app.get('/ping', (req, res) => res.send('Server is running!'));


app.listen(8000,()=>{
    console.log('server is running')
})

