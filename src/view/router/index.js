import { Route, Routes } from "react-router-dom"
import HomeScreen from "../screeen/homeSceen"
import About from "../screeen/about"
import RegisterScreen from "../screeen/register"
import LoginPage from "../screeen/login"
import Branch from "../screeen/master/branch"
import AddEmployee from "../screeen/employee/addemployee"
import Dashboard from "../screeen/dashboard"
import AllStudent from "../screeen/student/AllStudent/allstudent"

const RouterNav = () => {

    return (
        <Routes>

            <Route Component={HomeScreen} path="/HomeScreen" />
            <Route Component={RegisterScreen} path="/RegisterScreen" />
            <Route Component={LoginPage} path="/" />
            <Route Component={Branch} path="/branch" />
            <Route Component={AddEmployee} path="/addemployee" />
            <Route Component={Dashboard} path="/dashboard" />
            <Route Component={About} path="/About" />
            <Route Component={AllStudent} path="/allstudent"/>
        </Routes>
    )

}

export default RouterNav