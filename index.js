import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';

const app = express();

app.use(cors());

//sets the path to my dirctory
const jiadirname = path.resolve();
//console.log(_jiadirname)

const PORT = 8080; 

app.get('/', (req, res) => {
    console.log('someone is home')
    res.sendFile(path.join(jiadirname, 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Hi Barbie! Server is running on port ${PORT}`)
});