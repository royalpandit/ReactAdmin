const express = require("express")
const cors = require("cors");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
process.env.TOKEN_SECRET;
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
const port = 4000
const multer = require('multer')
app.use((req, res, next) => {


    console.log(process.env.FRONTEND_URL);

    // Set CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // Replace with your frontend domain
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true"); // Allow credentials (cookies, etc.)

    // Pass to next layer of middleware
    next();
});
app.listen(port, () => console.log("The server is listening on port", { port }))



const storage = multer.diskStorage({
    destination: function (req, file, cb) {


        cb(null, 'public/upload/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})



const upload = multer({ storage: storage })
app.post('/upload', upload.single('image'), async (req, res) => {


    console.log("req.file", req.file);


    res.json({ "success": true, "data": req.file })
})