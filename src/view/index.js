import { BrowserRouter, Link } from 'react-router-dom'
import RouterNav from './router'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../view/screeen/nav/style.css'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import SideBar from './screeen/nav/sidebar';
const App = () => {

  const [master, setMaster] = useState("")



  const datatransfer = [
    {
      id: 14, name: "Master", date: "2024-03-04", transfer: "Positive", point: "100", "submenu": [
        { "name": "branch", "nav": "/branch" },
        { "name": "session", "nav": "" },
        { "name": "class", "nav": "/dashboard" },
        { "name": "section", "nav": "/allstudent" },
        { "name": "feehead", "nav": "" },
      ]
    },
    {
      id: 14, name: "Employee", date: "2024-03-04", transfer: "Positive", point: "100", "submenu": [
        { "name": "Add Employee", "nav": "/addemployee" },
        { "name": "Attendance", "nav": "/attendence" },
        { "name": "Salary", "nav": "/salary" },
        { "name": "Leave", "nav": "/leave" },
        { "name": "Overtime", "nav": "/overtime" },
      ]
    },
    { id: 1, name: "Admission", date: "2024-03-05", transfer: "Denied", point: "110" },
    { id: 2, name: "Attendence", date: "2024-03-06", transfer: "Succefull", point: "140" },
    { id: 3, name: "Fees", date: "2024-03-07", transfer: "Rejected", point: "103" },
    { id: 4, name: "Payroll", date: "2024-03-08", transfer: "Error", point: "120" },
    { id: 5, name: "Academic", date: "2024-03-09", transfer: "Refund", point: "200" },
    { id: 6, name: "Reports", date: "2024-03-10", transfer: "Failed", point: "180" },
    { id: 7, name: "Sms", date: "2024-03-11", transfer: "Refund Again", point: "300" },
    { id: 8, name: "Inventory", date: "2024-03-12", transfer: "Failure", point: "1000" },
    { id: 9, name: "Tools", date: "2024-03-13", transfer: "Reject", point: "1000" },
    { id: 10, name: "Student", date: "2024-03-14", transfer: "Success", point: "400" },
    { id: 11, name: "Teacher", date: "2024-03-15", transfer: "Success", point: "100" },
    { id: 12, name: "Time Table", date: "2024-03-15", transfer: "Pending", point: "50" }]





  const onClickMaster = (value) => {
    setMaster(value)

  }



  return (

    <BrowserRouter>
      <div >
        
        {/* <div style={{backgroundColor:'red',display:'flex'}}> */}
        <div className='maincontainer'>
          {/* <div className='styleNavContaniner'> ̑
             
            {
              datatransfer && datatransfer.map(d => (
                <div >
                  <Button className='styleWrap' onClick={() => onClickMaster(d.name)} >{d.name}</Button>
                  {
                    master === d.name &&
                    d.submenu && d.submenu.map(dd => (

                      <div>
                        <Link to={dd.nav}>{dd.name}</Link>
                      </div>

                    ))}
                </div>

              ))

            }
          </div> */}
          <div className='styleNavContaniner'> ̑
            <SideBar />

          </div>
          <div style={{ width: '80%', height: '100%' }}>
            <RouterNav />
          </div>
        </div>
      </div>

      {/* <div className='footer'>
          
            <div className='row1'>
              {[1,2,3,4,5,6,7,8,9,10].map(d=>(
                <div className='col1'>
                
                </div>
                ))
                }
              </div>
          </div> */}
    </BrowserRouter>



  )
}

export default App