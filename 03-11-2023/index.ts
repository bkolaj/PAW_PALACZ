    import express, {Express, Request, Response} from 'express'
    import path from 'path'
    import {api} from './routes/api'
    import { PrismaClient } from '@prisma/client'

    const app: Express = express()
    const port:number = 3001

    const htmlRoot: string = path.join(__dirname, 'public/views/')

    const prisma = new PrismaClient()

    app.use(express.static(path.join(__dirname,'public')))
    app.use(express.urlencoded({extended: true}))

    app.get('/', (req: Request, res: Response) => {
        res.sendFile(htmlRoot + 'index.html')
    })

    app.get('/kontakt', (req: Request, res: Response) => {
        res.sendFile(htmlRoot + 'kontakt.html')
    })



    app.post('/kontakt', (req: Request, res: Response) => {
        const formData = req.body
        prisma.form.create({
            data: {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            }
        }).then((result) => {
            console.log("Form sent to db")
        })

        res.redirect('/')
    })

    app.use('/api', api)

    app.listen(port, () => {
        console.log(`App running 127:0.0.1:${port}`)
    })