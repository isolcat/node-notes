const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.get('/server', (req, res) => {
    res.setHeader('Access-Controll-Allow-origin', '*');
    res.send('HELLO AJAX')
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))