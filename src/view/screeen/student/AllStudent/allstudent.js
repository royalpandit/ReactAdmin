 import studentData from '../../../data/allStudents.json';
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import { URL } from "../../../utils"

import {
    Badge,
    Button,
    Card,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableBody,
    MultiSelectBox,
    MultiSelectBoxItem,
} from '@tremor/react';




const AllStudent = () => {
    const [selectedNames, setSelectedNames] = useState([]);
    const isStudentSelected = (student) =>
        selectedNames.includes(student.studentsId) || selectedNames.length === 0;

    useEffect(()=>{
        showList(1,1,1)
    },[])


    async function showList(id,session,classdata){

       
     
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
            console.log(data.data.studata);
            setSelectedNames(data.data.studata)
            
          }
          else{
            
          }
          
           })
        .catch(err=>console.log("erro=>",err))
        .finally(()=>{
          
        })
        
      }


    return (



        <div>
            <div style={{ backgroundColor: 'white', paddingLeft: '10px' }}>
                <header className="ie-as-header flex w-full justify-between">
                    <h3 style={{ backgroundColor: 'red' }}>All Students</h3>
                    <div className="flex gap-5">
                        <Button className="hidden h-9 rounded border border-gray-300 bg-white px-8 text-base font-medium text-gray-700 transition-all hover:border-gray-800 hover:bg-gray-800 hover:text-white sm:block">
                            Export
                        </Button>
                    </div>
                </header>
                <div style={{ backgroundColor: 'brown' }}>
                    <Card shadow={false}>
                        <MultiSelectBox
                            onValueChange={(value) => setSelectedNames(value)}
                            placeholder="Select by ID..."
                            maxWidth="max-w-xs"
                        >
                            {selectedNames.map((item) => (
                                <MultiSelectBoxItem
                                    key={item.studentsId}
                                    value={item.studentsId}
                                    text={
                                        item.studentsId +
                                        " : " +
                                        item.FirstName +
                                        " " +
                                        item.sessionName
                                    }
                                />
                            ))}
                        </MultiSelectBox>
                        <Table marginTop="mt-6">
                            <TableHead>
                                <TableRow >
                                    <TableHeaderCell >Student ID</TableHeaderCell>
                                    <TableHeaderCell>Name</TableHeaderCell>
                                    <TableHeaderCell>Class / Section</TableHeaderCell>
                                    <TableHeaderCell>Date of Admission</TableHeaderCell>
                                    <TableHeaderCell>Guardian's Name</TableHeaderCell>
                                    <TableHeaderCell>Guardian's Phone</TableHeaderCell>
                                    <TableHeaderCell>Actions</TableHeaderCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {/* selectedNames
                                    .filter((item) => isStudentSelected(item)) */

                                    selectedNames.map((item) => (
                                        <TableRow key={item.studentsId}>
                                            <TableCell>
                                                <Badge text={item.studentsId} size="xs" color="sky" />
                                            </TableCell>
                                            <TableCell>
                                                {item.FirstName }
                                                {/* {item.FirstName + " " + item.studentMiddleLastName} */}

                                            </TableCell>
                                            <TableCell>
                                                {item.status + " / " + item.Medium}
                                            </TableCell>
                                            <TableCell>{item.className}</TableCell>
                                            <TableCell>{item.PreviousSchoolSRNo}</TableCell>
                                            <TableCell>{item.CCity}</TableCell>
                                            <TableCell>
                                                <Link
                                                    to={item.studentsId}
                                                    className="rounded-full bg-green-200 py-[3px] px-3 text-xs text-green-900 transition-all hover:bg-green-100"
                                                >
                                                    View
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="ml-3 rounded-full bg-orange-200 py-[3px] px-3 text-xs text-orange-900 transition-all hover:bg-orange-100"
                                                >
                                                    Edit
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>
            </div>
        </div>

    )
}
export default AllStudent