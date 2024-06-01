import express, { Request, Response } from 'express';
import ConnectToMongoDB from './db';
import api from './api';
import apiV2 from './apiv2';

const app = express()
const port = 3000


app.use(express.json());
app.use(express.urlencoded({extended : false}));


ConnectToMongoDB();

//Auth
// app.use((req, res, next) => {
//     if(req.headers.secret_key && req.headers.secret_key == "admin" ){
//         return next();
//     }
//     return res.status(401).send({ message : "Unauthorized"});
// });

app.get('/', (req:Request, res:Response) => {
  res.send('My First API!');
});

app.use("/api/v1",api);
app.use("/api/v2",apiV2);


//localhost:3000/api/v1/list
//localhost:3000/api/v1/find

app.listen(port, () => {
  console.log(`[Server] is running on localhost:${port}`)
})