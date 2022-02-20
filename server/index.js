import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import todoRoutes from "./routes/todos.js";


const app = express();

dotenv.config();

app.use(bodyParser.json({ extented: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        author: 'admin',
        message: 'Hello'
    })
});

app.use('/todos', todoRoutes)


mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server is running on port ${process.env.PORT}`)
    });
}).catch(err => console.log(err.message))
