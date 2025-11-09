import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

const connectionURL = 'mongodb+srv://<password>:<username>@cluster0.7mzzwmt.mongodb.net/'

mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch(err => console.log('MongoDB connection error:', err));


