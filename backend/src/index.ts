import express, {Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'
import {convertStringToMinutes} from './utils/convertStringToMinutes'
import {bodyAd} from './interfaces'
import {convertMinutesToHour} from './utils/convertMinutesToHour'
import cors from 'cors'
const prisma = new PrismaClient()

const app = express()
app.use(cors())

app.use(express.json())

app.get('/games', async (req: Request, res: Response) => {

    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    Ads: true
                }
            }
        }
    })

    return res.json(games)
})

app.get('/games/:id/ads', async (req: Request, res: Response) => {

    const gameId = req.params.id

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true
        },
        where: {
            gameId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return res.json(ads.map((e) => {
        return {
            ...e,
            weekDays: (e.weekDays.split(',')),
            hourStart: convertMinutesToHour(e.hourStart),
            hourEnd: convertMinutesToHour(e.hourEnd)
        }
    }))
})

app.post('/games/:id/ads', async (req: Request, res: Response) => {

    const gameId = req.params.id

    try {

        const body: bodyAd = req.body
        const Ad = await prisma.ad.create({
            data: {
                name: body.name,
                discord: body.discord,
                hourStart: convertStringToMinutes(body.hourStart),
                hourEnd: convertStringToMinutes(body.hourEnd),
                useVoiceChannel: body.useVoiceChannel,
                weekDays: body.weekDays.join(','),
                yearsPlaying: body.yearsPlaying,
                gameId
            }
        })

        return res.status(201).json({...Ad})

    } catch (e: any) {

        return res.status(400).json({error: "erro ao enviar form"})
    }
})

app.get('/ads', async (req: Request, res: Response) => {

    const ads = await prisma.ad.findMany()

    return res.json(ads)

})

app.get('/ads/:id/discord', async (req: Request, res: Response) => {

    const adId = req.params.id

    try {

        const ad = await prisma.ad.findUniqueOrThrow({
            select: {
                discord: true
            },
            where: {
                id: adId
            }
        })
        return res.json({
            discord: ad.discord
        })
    } catch (error: any) {
        return res.json({
            error: "Discord não encontrado"
        })
    }

})

app.listen(3333, () => {
    console.log(`server rodando na porta 3333`)
})
