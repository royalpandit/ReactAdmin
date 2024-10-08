import axios from "axios"
import { useEffect, useState } from "react"
import { URL } from "../../../utils"

const AddEmployee = () => {


    const [file, setFile] = useState("")


    const onCLickFileUpload = (value) => {
        console.log("==>>>>>>>>>log", value.target.files[0])
        setFile(value.target.files[0])

    }



useEffect(()=>{
    showDocument(1,1,1)
},[])

    async function showDocument(id,session,classdata){

       
     
        //let url = `${localbasicurl}getStudentsPageApi?currentpage=${page}&limit=${limit}&branchid=${id}&session=${session}&selectclass=${selectclass}`
        let params = { branchId: id,sessionName:session,classdata }
        let info= {};
        info.method = 'post';
        info.headers = {
          'Content-Type': 'application/json',
        }
        info.body = JSON.stringify(params)
        let url = URL + "getStudentsByClassApi"
        await fetch(url, info)
        .then((res)=>res.json())
        .then((data)=>{
         
          console.log("data",data);
          if(data.success){
            let stdata1 =data.data.studata
            
            console.log(data.data);
            
           
            
         
          }
          else{
            
          }
          
           })
        .catch(err=>console.log("erro=>",err))
        .finally(()=>{
          
        })
        
      }


const onCLickFile= async()=>{
    let data = new FormData();
    data.append("file", file)
        data.append("class",1)
        data.append("branchId",1)
        data.append("groupId",1)
        data.append("sessionName",1)
    
    let urlOfS = URL+"uploadExcelFile"; // your url
    console.log(urlOfS);
    
    const responseOfFileUpload = await fetch(urlOfS, {
    method: 'POST',
   
    body:data,
    });
  
   
    
   

        console.log(responseOfFileUpload);
        if(responseOfFileUpload.status){
            showDocument(1,1,1)
        }
        

   

}

    const onCLickFile11 = () => {
        console.log("==>>>>>>>>>log", file)
        let data = new FormData()
        data.append("file", file)
        data.append("class",1)
        data.append("branchId",1)
        data.append("groupId",1)
        data.append("sessionName",1)
        axios.post( URL+'uploadExcelFile', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(data => data.data).then(data => {
            console.log("res=>>",data)
        }).catch(err => console.log(err))

        /*   let data = new FormData()
          data.append("file",file)
          
          let info ={};
         info.headers = {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data',
            }
            info.body=data
          axios.post("http://localhost:4000/uploadFile", info).then(d => d.data).then(data => {
              console.log(data);
          }) .catch(err=>console.log(err)) */


    }
    /*  const ApiCall = () => {
         console.log('Demo12345')
         let params = { "owner_id": 40, "logged_id": 40, "company_id": 1 }
         //https://portal.nircore.com/api/employee-list
         //http://192.168.16.148:4000/getList
         axios.post("ttp://192.168.16.148:4000/getList", params).then(d => d.data.data.employee_result).then(a => {
             console.log('Log==>>>>', a)
             //   setData(a)
             //  setdatadesignation(a)
         }).catch(e => { console.log(e) })
     }
  */



    useEffect(() => {
        // ApiCall()


    }, [])

    return (
        <div style={{ backgroundColor: 'white', margin: '10px' }}>
            <h1>Create new user</h1>
            <div style={{ display: "flex", marginLeft: '10px' }}>

                <div>
                    <input type="text" placeholder='enter name' /> <br /><br />

                </div>
                <div style={{ marginLeft: '10px' }}>
                    <input type="text" placeholder='enter department' /><br /><br />

                </div>



            </div>
            <div style={{ display: "flex", marginLeft: '10px' }}>

                <div>
                    <input type="text" placeholder='enter academic year' /><br /><br />
                </div>

                <div style={{ marginLeft: '10px' }}>
                    <input type="text" placeholder='enter phone' /><br /><br />
                </div>

            </div>

            <div style={{ display: "flex", marginLeft: '10px' }}>
                <div>
                    <input type="text" placeholder='enter fees' /><br /><br />
                </div>

                <div style={{ marginLeft: '10px' }}>
                    <input type="text" placeholder='enter email' /><br /><br />
                </div>
            </div>



            <div style={{ display: "flex", marginLeft: '10px' }}>


                <div style={{ width: '190px', height: '' }}>
                    <select name="" id="" >
                        <option value="">Select Acdemic Year</option>
                        <option value="First Year">First Year</option>
                        <option value="Second Year">Second Year</option>
                        <option value="Third Year">Third Year</option>
                        <option value="Fourth Year">Fourth Year</option>
                    </select><br /><br />
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <input type="text" placeholder="roll number" /> <br /><br />
                </div>

            </div>

            <div style={{ display: "flex", marginLeft: '10px' }}>
                <div>
                    <input type="file" placeholder='file' onChange={onCLickFileUpload} /><br /><br />
                </div>


            </div>

            <div style={{ display: 'flex', background: 'red', justifyContent: 'center', height: '50px' }} >
                <button onClick={onCLickFile} style={{ backgroundColor: 'blue', width: '100px', borderRadius: '10px', margin: '5px' }} >ADD</button>
            </div>

        </div>
    )
}
export default AddEmployee