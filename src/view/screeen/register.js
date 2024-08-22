import { Link } from 'react-router-dom'

const RegisterScreen=()=>{
    return(
        <div className='loginbox'>
            
   <h1>RegisterScreen</h1>
            <form>
                <p>Username</p>
 
                <img src={require('../assets/image/dallalStreet.png')}  className='avatar' />
                <input type="text" name= "" placeholder="Enter Username" required/>
                <p>Password</p>
                <input type="Password" name="" placeholder="Enter Password" required/>
                <input type="submit" name="" value="Login"/><br></br>
                <Link to="/">Forget your Password?</Link><br></br>
                <a href="JS Exercise File\Registration page\Registration.html">Don't have account?</a>

            </form>


            
            


        </div>
    )
}

export default RegisterScreen