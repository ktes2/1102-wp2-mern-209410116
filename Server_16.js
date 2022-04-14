
//Common JS
// const express = require ('express');

import express from 'express'; 


const app = express();

app.get('/', (req, res)=> {
    res.send('Welcome Chen Yin 209410116');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`))