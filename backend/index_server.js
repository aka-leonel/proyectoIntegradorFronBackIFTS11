const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000

const corsOptions = {
    origin: 'http://localhost:4200'
}

app.use(cors(corsOptions));
app.use(express.json());

const notasRouter = require('./Routers/notasRouter')

app.use('/api/notas', notasRouter);

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
