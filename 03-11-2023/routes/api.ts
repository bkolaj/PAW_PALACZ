import express, {Request, Response} from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma  = new PrismaClient()
interface IStudent {
    id: number
    name: string
    surname: string
    email: string
}

interface ISubject {
    id: number
    name: string
    hoursAWeek: number
}

const apiDocumentation = {
    "students": {
        "url": "/api/students",
        "description": "Returns student list, format: {id: number, name: string, surname: string, email: string}"
    },
    "subjects": {
        "url": "/api/subjects",
        "description": "Returns subject list, format: {id: number, name: string, hoursAWeek: number}"
    }
}

router.get('/', (req: Request, res: Response) => {
    res.json(apiDocumentation)
})

router.get('/students', (req: Request, res: Response) => {
    prisma.students.findMany().then((result) => {
        res.json(result)
    })
})

router.get('/subjects', (req: Request, res: Response) => {
    prisma.subjects.findMany().then((result) => {
        res.json(result)
    })
})

router.get('/students/:id', (req: Request, res: Response) => {
    prisma.students.findUnique({
        where: {
            id: Number(req.params.id)
        }
    }).then((result) => {
        if (result === null) {
            res.status(404).json({status: '404', error: 'Student not found'})
            res.end()
        }
        else {
            res.json(result)
        }
    })
})

router.get('/students/:id', async (req: Request, res: Response) => {
    try {
        const result = await prisma.students.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });

        if (!result) {
            res.status(404).json({ status: '404', error: 'Student not found' })
        } else {
            res.json(result)
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
});


router.get('/subjects/:id', (req: Request, res: Response) => {
    prisma.subjects.findUnique({
        where: {
            id: Number(req.params.id)
        }
    }).then((result) => {
        if (result === null) {
            res.status(404).json({status: '404', error: 'Subject not found'})
            res.end();
        }
        else {
            res.json(result)
        }

    })
})

export { router as api };
