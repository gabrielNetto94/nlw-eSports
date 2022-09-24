import express, {Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const app = express()

app.get('/games', async (req: Request, res: Response) => {

    const games = await prisma.game.findMany()

    return res.json(games)
})

app.get('/ads', async (req: Request, res: Response) => {

    const ads = await prisma.ad.findMany()

    return res.json(ads)

})

app.listen(3333, () => {
    console.log(`server rodando na porta 3333`)
})
