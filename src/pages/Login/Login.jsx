import React from 'react';
import { useContext } from 'react';
import { Container, FormText } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/category/0'

    const handleLogin=event=>{
        event.preventDefault()
        const form= event.target;
        const password= form.password.value
        const email= form.email.value

        console.log(password,email);

        signIn(email,password)
        .then(res=>{
            const loggedUser = res.user;
            console.log(loggedUser); 
            navigate(from,{replace:true})
        })
        .catch(error=>{ console.log(error.message) })
    }

    return (
        <Container className='mx-auto w-25'>

            <h2>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                
                <Button variant="dark" type="submit">
                    Login
                </Button>
                <br />
                <FormText className='text-secondary'>
                <Link to='/register'>Dont have an account?</Link>
                </FormText>
                <FormText className='text-success'></FormText>
                <FormText className='text-warning'></FormText>
            </Form>

        </Container>
    );
};

export default Login;