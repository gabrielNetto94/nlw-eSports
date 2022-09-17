import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.send({
        teste1: 'asdas',
        teste2: 'asdas',

    })
})

app.listen(3333)
