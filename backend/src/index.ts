const express = require('express')

const app = express()

app.get('/', (req:any, res:any) => {
    res.send({
        teste1: 'asdas',
        teste4: 'asdas',

    })
})

app.listen(3333,()=>{
    console.log(`server rodando na porta 3333`)
})
