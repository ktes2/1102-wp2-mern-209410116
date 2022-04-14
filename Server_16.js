
//Common JS
// const express = require ('express');

import express from 'express'; 

const app = express();

import dotnev from 'dotenv';
dotnev.config();

import connectDB_16 from './db/connect_16.js';

app.get('/', (req, res)=> {
    res.send('Welcome Chen Yin 209410116');
});

const port = process.env.PORT || 5000;

const start = async () => {
    try{
        await connectDB_16(process.env.MONGO_LOCAL_URL).then( () => {
            console.log('Connecting to MongoDB');
        });
        app.listen(port, () => console.log(`Server is running on port ${port}`))
    }catch(err){
        console.log(err);
    }
}

start();

