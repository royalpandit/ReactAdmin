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
const Student = require("./models/Student"); 
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






var excelStorage = multer.diskStorage({  
    destination:(req,file,cb)=>{  
         cb(null,'./public/upload');     
    },  
    filename:(req,file,cb)=>{  
         cb(null,file.originalname);  
    }  
});  
var excelUploads = multer({storage:excelStorage});  
app.post('/uploadExcelFile', excelUploads.single("file"),async (req, res) =>{  
   let result=""
    let id=0;
    let resp = await Student.find({ branchId: req.body.branchId, sessionName:req.body.sessionName}).then((res)=>res)
            
            if(resp.length>0){
              
                resp.map(d=>{
                    id=d.studentsId
                })
                 id++  
            }else{
                id=1;
            }
            let datastudent =await  Student.find({ branchId: req.body.branchId, sessionName:req.body.sessionName}).then(res=>res)
          //  console.log(datastudent);
       importFile('./public' + '/excelUploads/' + req.file.filename);
            function importFile(filePath){
            
                const file = reader.readFile(filePath) 
                 let data = [] 
                const sheets = file.SheetNames 
            
               for(let i = 0; i < 1; i++) 
                { 
                   const temp = reader.utils.sheet_to_json( 
                        file.Sheets[file.SheetNames[0]]) 
                      
                   temp.forEach((res,index) => { 

             
                    res["studentsId"]=id++
                    res["ClassSection"]=req.body.class
                    res["branchId"]=req.body.branchId
                    res["groupId"]=req.body.groupId
                    res["sessionName"]=req.body.sessionName
                     res["otp"]="1111"
                     res["status"]="students"
                      res["image"]=""
                   
                    data.push(res) 
                   }) 
                } 
          

                Student.insertMany(data)
                    .then(function () {
        console.log("Successfully saved defult items to DB");
        result="Successfully saved defult items to DB"
      })
      .catch(function (err) {
        console.log("duplicat=>>",err.writeErrors[0].err.errmsg);
        result=err.writeErrors[0].err.errmsg
      }); 
                 
    }


           res.json(result)
})
