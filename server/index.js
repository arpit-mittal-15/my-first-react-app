const express = require('express');
const cors = require("cors");
const { connectToMongoDB } = require("./connect");
const { handleFormData } = require("./controllers/detail")

const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://127.0.0.1:27017/form-data")
.then(()=> console.log("mongoDB connected"));

app.use(cors({origin:"http://localhost:5173"}));
app.use(express.json());

app.post("/api/detail", handleFormData);

app.listen(PORT, ()=> console.log(`Server started at port: ${PORT}`))