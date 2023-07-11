import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import Link from '@mui/material/Link';

const Login = () => {
    return (
        <>
            <LockIcon style={{ marginTop: '50px' }} baseClassName="fas" className="fa-plus-circle" color="secondary">add_circle</LockIcon>
            <p>Sign up</p>
            <form style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    defaultValue="Name"
                />
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue="Email"
                />
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    defaultValue="Password"
                />
                <br />
                <Button variant="contained">REGISTER</Button>
                <br/>
                <Link href="#" underline="always">
                    {'Already have an account?Sign In'}
                </Link>
            </form>
        </>
    )
}

export default Login