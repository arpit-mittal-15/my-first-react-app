const express = require('express');
const cors = require("cors");
// const multer = require("multer")
// const fileupload = require('express-fileupload')

const { connectToMongoDB } = require("./connect");
const { handleFormData,} = require("./controllers/detail")


const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://127.0.0.1:27017/form-data")
.then(()=> console.log("mongoDB connected"));

app.use(cors({origin:"http://localhost:5173"}));
app.use(express.json());
// app.use(express.urlencoded({extended:false}))
// app.use(fileupload());


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './resume')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now()
//     cb(null, uniqueSuffix+file.originalname)
//   }
// })

// const upload = multer({ storage: storage })

app.post("/api/detail", handleFormData);
// app.post('/api/resume', handleResume);

app.listen(PORT, ()=> console.log(`Server started at port: ${PORT}`))