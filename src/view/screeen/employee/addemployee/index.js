const AddEmployee = () => {
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


                <div style={{width:'190px',height:''}}>
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

            <div style={{display:'flex',background:'red',justifyContent:'center',height:'50px'}} >
            <button style={{backgroundColor:'blue',width:'100px',borderRadius:'10px',margin:'5px'}} >ADD</button>
            </div>
       
        </div>
    )
}
export default AddEmployee