const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors(), express.json());

const connectDB = require('./config/mongoose.config');
connectDB();

const pirateRouter = require('./routes/pirate.routes');
app.use('/api/pirates', pirateRouter);

const port = 8000;
app.listen(port, () => console.log(`The server is loaded on port ${port}`));

