import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos nam deleniti inventore earum nostrum architecto similique. Vero, consequuntur cupiditate.</p>
            <p>Go Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;