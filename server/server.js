import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import dbconfig from './config/configdb.js';
import cors from 'cors';

dotenv.config();
const PORT=process.env.PORT;
const app=express();

app.use(cors());
dbconfig();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(dbconfig);
app.use("/api/todos",router);

app.listen(PORT,()=>console.log(`Server is running on ${PORT}`));