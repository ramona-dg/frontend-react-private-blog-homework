import React from 'react';
import { Link } from 'react-router-dom';


function LoginPage() {
    return (
        <>
            <Link to="/blogposts">
                <button>Inloggen</button>
            </Link>

        </>
    );
}

export default LoginPage;