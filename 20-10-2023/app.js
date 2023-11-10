"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
const locomotives = [
    { id: 1, name: 'EP07-174', common_name: 'Szpinak', manufacturer: 'Pafawag' },
    { id: 2, name: 'SM42', common_name: 'Stonka', manufacturer: 'Fablok' },
    { id: 3, name: 'EU44', common_name: 'Husarz', manufacturer: 'Siemens' },
    { id: 4, name: 'SA139', common_name: 'Rekin', manufacturer: 'PESA' },
    { id: 5, name: 'ED160', common_name: 'Impuls', manufacturer: 'NEWAG' },
    { id: 6, name: 'EN100', common_name: 'Vader', manufacturer: 'NEWAG' },
    { id: 7, name: 'EN57', common_name: 'Kibel', manufacturer: 'Pafawag' },
    { id: 8, name: 'ET22', common_name: 'Byk', manufacturer: 'Pafawag' },
    { id: 9, name: 'ET42', common_name: 'Czapajew', manufacturer: 'NEWZ Nowoczersk' },
    { id: 10, name: '401Da', common_name: 'Kaczka', manufacturer: 'Fablok' }
];
const factories = [
    { id: 1, name: 'NEWZ', created: 1936 },
    { id: 2, name: 'PESA', created: 1851 },
    { id: 3, name: 'Fablok', created: 1919 },
    { id: 4, name: 'Newag', created: 1876 },
    { id: 5, name: 'Siemens', created: 1847 },
    { id: 6, name: 'HCP', created: 1920 },
    { id: 7, name: 'Bombardier', created: 1890 },
    { id: 8, name: 'Alstom', created: 1912 },
    { id: 9, name: 'Stadler', created: 1956 },
    { id: 10, name: 'EMD', created: 1969 },
];
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/kontakt', (req, res) => {
    res.render('contact');
});
app.post('/kontakt', (req, res) => {
    const { name, email, subject, message } = req.body;
    res.redirect('/');
});
app.get('/api', (req, res) => {
    const apiRoutes = [
        { route: '/api/students', description: 'Zwraca liste 10 lokomotyw oraz ich fabryk' },
        { route: '/api/students/:id', description: 'Zwraca lokomywe z okreslonym identyfikatorem lub 404' },
        { route: '/api/subjects', description: 'Zwraca listę minimum 10 fabryk lokomotyw w formacie {id: number, name: string, created: number}' },
        { route: '/api/subjects/:id', description: 'Zwraca przedmiot z okreslonym identyfikatorem lub 404' }
    ];
    res.json(apiRoutes);
});
app.get('/api/students', (req, res) => {
    const firstTenLocomotives = locomotives.slice(0, 10);
    res.json(firstTenLocomotives);
});
app.get('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const locomotive = locomotives.find(loco => loco.id === id);
    if (locomotive) {
        res.json(locomotive);
    }
    else {
        res.status(404).json({ message: 'Lokomotywa nie znaleziona' });
    }
});
app.get('/api/subjects', (req, res) => {
    const firstTenFactories = factories.slice(0, 10);
    res.json(firstTenFactories);
});
app.get('/api/subjects/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const factory = factories.find(fac => fac.id === id);
    if (factory) {
        res.json(factory);
    }
    else {
        res.status(404).render('404', { id: id });
    }
});
app.listen(port, () => {
    console.log(`Aplikacja działa na http://localhost:${port}`);
});
