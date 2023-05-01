import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'



const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <div>
                <Button className='mb-2' variant="outline-primary">
                    <FcGoogle></FcGoogle> Login with Google</Button>
                <Button variant="outline-secondary"><FaGithub></FaGithub> Login with Github</Button>
            </div>

            <div className='mt-4 mb-4'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter> twitter </ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> instagram</ListGroup.Item>
                </ListGroup>

                <QZone></QZone>
            </div>

            <div>
                <img src={bg} alt="" />
            </div>

        </div>
    );
};

export default RightNav;