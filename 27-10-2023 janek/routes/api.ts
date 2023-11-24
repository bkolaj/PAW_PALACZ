import express, {Request, Response} from 'express';
import { createConnection, Connection, MysqlError } from 'mysql';

const router = express.Router();

const connection: Connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'zadanie'
});

connection.connect((err: MysqlError) => {
    if (err) throw err;
    console.log('Connected to database');
});

interface IStudent {
    id: number;
    name: string;
    surname: string;
    email: string;
}

interface ISubject {
    id: number;
    name: string;
    hoursAWeek: number;
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
    res.json(apiDocumentation);
});

router.get('/students', (req: Request, res: Response) => {
    connection.query('SELECT * FROM students', (err: MysqlError, result: Array<IStudent>) => {
        if (err) throw err;
        res.json(result);
    });
});

router.get('/subjects', (req: Request, res: Response) => {
    connection.query('SELECT * FROM subjects', (err: MysqlError, result: Array<ISubject>) => {
        if (err) throw err;
        res.json(result);
    });
});

router.get('/students/:id', (req: Request, res: Response) => {
    connection.query(`SELECT * FROM students WHERE id = ${req.params.id}`, (err: MysqlError, result: Array<IStudent>) => {
        if (err) throw err;
        if (result.length === 0) {
            res.status(404).json({status: '404', error: 'Student not found'});
            res.end();
        } else {
            res.json(result);
        }
    });
});

router.get('/subjects/:id', (req: Request, res: Response) => {
    connection.query(`SELECT * FROM subjects WHERE id = ${req.params.id}`, (err: MysqlError, result: Array<ISubject>) => {
        if (err) throw err;
        if (result.length === 0) {
            res.status(404).json({status: '404', error: 'Subject not found'});
            res.end();
        } else {
            res.json(result);
        }
    });
});

export { router as api };
