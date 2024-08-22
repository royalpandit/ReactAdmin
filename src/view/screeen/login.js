import { Form, Button, Alert } from "react-bootstrap";

import BackgroundImage from "../assets/image/stockeish.jpg";
import Logo from "../assets/image/dallalstreetsmall.jpg";
import { useState } from "react";
import "../../view/style.css"
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    return (
        <div
            className="sign-in__wrapper"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            {/* Overlay */}
            <div className="login-overlay"></div>

            {/* Form */}
            {/*  <Form className="card col-12 col-lg-4 login-card mt-2 hv-center"  > */}
            <Form className="avtImage"  >
                {/* Header */}

                <div className="imageContainer">
                    <img
                        className="avatar"
                        src={Logo}
                        alt="logo"
                    />
                </div>
                <div className="containerlogin">


                    <div className="h4 mb-2 text-center">Sign In</div>
                    {/* ALert */}
                    {show ? (
                        <Alert
                            className="mb-2"
                            variant="danger"
                            dismissible
                        >
                            Incorrect username or password.
                        </Alert>
                    ) : (
                        <div />
                    )}


                    <Form.Group className="mb-2" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="checkbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    {!loading ? (
                        <Button className="w-100" variant="primary" type="submit">
                            Log In
                        </Button>
                    ) : (
                        <Button className="w-100" variant="primary" type="submit" disabled>
                            Logging In...
                        </Button>
                    )}

                </div>
                <div className="d-grid justify-content-end">
                    <Link to="/HomeScreen">Forget your Password?</Link>

                    {/* 
                    <Button
                        className="text-muted px-0"
                        variant="/RegisterScreen"
                    >
                        Forgot password?
                    </Button> */}
                </div>
            </Form>
            {/* Footer */}
            <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
                Made by Abi | &copy;2022
            </div>
        </div>


    )
}

export default LoginPage



{/*  <div className='logintemp'>
                <h1>Login</h1>
                <form>
                    <p>Username</p>
                    <div className='avt'>
                        <img src={require('../assets/image/dallalStreet.png')} className='avatar' />

                    </div>

                    <div>
                        <input type="text" name="" placeholder="Enter Username" required />
                        <p>Password</p>
                        <input type="Password" name="" placeholder="Enter Password" required />
                        <input type="submit" name="" value="Login" /><br></br>
                        <a href="#">Forget your Password?</a><br></br>
                        <a href="/RegisterScreen">Don't have account?</a>

                    </div>



                </form>

            </div> */}