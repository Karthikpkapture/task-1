import React from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className='wrapper'>
            <div className='flexbox-container'> 
                <div className='flex-item flex-item-1 '>
                    <div className=''>
                        <div className='pt-32 pl-32'>
                            <img className="w-32" src="http://localhost:3001/static/icons/logo.png" alt="" />
                            <h1 className="text-white text-6xl p-4">Welcome to Kapture CRM!</h1>
                            <div className='w-3/6'>
                                <h6 className="text-white text-base p-4">Kapture's all-in-one Customer Service platform has all the tools your teams need to deliver better and intelligent customer service.</h6>
                            </div>
                           
                        </div>
                        <div>
                       
                        </div>
                    </div>
                </div>

                <div className='flex-item flex-item-2'>

                    <div className='w-full p-12 mt-24'>
                        <h1 className='text-center font-bold'>LOGIN TO YOUR ACCOUNT </h1>
                        <div className='w-full mt-4'>
                            <TextField
                                id="outlined-textarea"
                                label="Email/UserName *"
                                className='w-full'
                                multiline
                            />   
                        </div>

                        <div className='w-full mt-4'>
                            <TextField
                                id="outlined-textarea"
                                label="Password*"
                                multiline
                                className='w-full'
                            />
                        </div>

                        <div className='w-full mt-4'>
                            <Link to="/dashboard">
                                <Button variant="contained" className='w-full'>
                                    Login
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
