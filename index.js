//import express
import express from "express";

//import router
import Router from "express";

//init expres
const app =express();

//use rother
app.use(Router)

//listen on port
app.listen(3000, () => console.log('Server Running at http://localhost:3000'));