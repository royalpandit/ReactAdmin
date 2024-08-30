const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connect");
const app = express()
const cors = require('cors')
const authRouter = require("./routes/auth");
app.use(cors());
app.use(express.json())
app.use("/api", authRouter);

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//Port and Connect to DB
const port = process.env.PORT || 5000;
/* 
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ab8107116:pyLnlkGAq7kapreV@demoreact.af5gw.mongodb.net/?retryWrites=true&w=majority&appName=demoReact", {useNewUrlParser: true});
*/

///

const start = async () => {
    console.log(process.env.URL);
    try {
        await connectDB(env.process.URL);
        
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log("error =>", error);
    }
};
start();
///




app.get('/', (request, response) => {
    response.send("Message Send")
})

app.get('/getList', (request, response) => {
    response.send("Student List")
})
app.post('/getFees', (request, response) => {
    response.send(request.body)
})

app.post("/login", (req, res) => {


    const user = new User({
        email: req.body.email,
        password: req.body.password
    });
    user.save();
    const docs = User.find().then(res => res.json()).then(data => data);
    console.log(docs);
    let result = { sucess: true, message: "REsult Hit", status: 200, }
    res.json(result)
}

)
