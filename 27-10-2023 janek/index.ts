    import express, {Express, Request, Response} from 'express'
    import path from 'path'
    import {api} from './routes/api'
    import { createConnection, Connection, MysqlError } from 'mysql'

    const app: Express = express()
    const port:number = 3000

    const htmlRoot: string = path.join(__dirname, 'public/views/')

    const connection: Connection = createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306,
        database: 'zadanie'
    })

    app.use(express.static(path.join(__dirname,'public')))
    app.use(express.urlencoded({extended: true}))

    app.get('/', (req: Request, res: Response) => {
        res.sendFile(htmlRoot + 'index.html')
    })

    app.get('/kontakt', (req: Request, res: Response) => {
        res.sendFile(htmlRoot + 'kontakt.html')
    })

    app.post('/kontakt', (req: Request, res: Response) => {

        connection.connect((err: MysqlError) => {
            if (err){
                throw err
            }

            const sql: string = `INSERT INTO FORM VALUES (NULL, '${req.body.name}', '${req.body.email}', '${req.body.subject}','${req.body.message}')`
            connection.query(sql, (err: MysqlError, result: any) => {
                if (err){
                    throw err
                }
                connection.end()
            })

        })
        res.redirect('/')
    })

    app.use('/api', api)

    app.listen(port, () => {
        console.log(`App running 127:0.0.1:${port}`)
    })