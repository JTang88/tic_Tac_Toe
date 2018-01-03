const express = require('express');
const app = express(); 
const path = require('path');


app.use(express.static(path.resolve(__dirname, '../client/dist')))

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3001, () => console.log('Example app listening on port 3001!'))