import React from 'react';
import { useContext } from 'react';
import { Container, FormText } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const password = form.password.value
        const photo = form.photo.value
        const email = form.email.value

        console.log(name, password, photo, email);

        createUser(email, password)
            .then(res => {
                const createdUser = res.user;
                console.log(createdUser);
            })
            .catch(error => { console.log(error.message) })
    }
    return (
        <Container className='mx-auto w-25'>

            <h2>Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' required placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' required placeholder="Enter photo url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                        onClick={handleAccepted}
                        name='accept'
                        label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>} />
                </Form.Group>


                <Button variant="dark"  disabled={!accepted} type="submit" >
                    Register
                </Button>
                <br />
                <FormText className='text-secondary'>
                    <Link to='/login'>Already have an account?</Link>
                </FormText>
                <FormText className='text-success'></FormText>
                <FormText className='text-warning'></FormText>
            </Form>

        </Container>
    );
};

export default Register;