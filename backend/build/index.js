"use strict";
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send({
        teste1: 'asdas',
        teste4: 'asdas',
    });
});
app.listen(3333, () => {
    console.log(`server rodando na porta 3333`);
});
