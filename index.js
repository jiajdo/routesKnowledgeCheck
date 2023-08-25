import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';

const app = express();

app.use(cors());

//sets the path to my dirctory
const _jiadirname = path.resolve();

const PORT = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(_jiadirname, 'index.html'))
})
