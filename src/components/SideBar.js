import React from 'react';
import './Sidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SettingsIcon from '@mui/icons-material/Settings';
import LaunchIcon from '@mui/icons-material/Launch';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


export default function SideBar() {
    return (
        <div>

            <div>

            </div>
            <div className='sidebar-parent'>

                <div className='icon-item '>
                    <Tooltip title="Dashboard" placement="right"  >
                        <IconButton className='icon-btn active' >
                            <DashboardIcon  />
                        </IconButton>   
                    </Tooltip>
                </div>

                <div className='icon-item icon-active '>
                    <Tooltip title="Account" placement="right"  >
                        <IconButton className='icon-btn'>
                            <AccountCircleIcon />
                        </IconButton>  
                    </Tooltip> 
                </div>

                <div className='icon-item'>
                    <Tooltip title="Daily Plan" placement="right"  >
                        <IconButton className='icon-btn'>
                            <EventIcon />
                        </IconButton> 
                    </Tooltip>
                </div>

                <div className='icon-item'>
                    <Tooltip title="Tickets" placement="right"  >
                        <IconButton className='icon-btn'>
                            <EventNoteIcon />
                        </IconButton>   
                    </Tooltip>
                </div>

                <div className='icon-item'>
                    <Tooltip title="Settings" placement="right"  >
                        <IconButton className='icon-btn'>
                            <SettingsIcon />
                        </IconButton> 
                    </Tooltip>
                </div>

                <div className='icon-item'>
                    <Tooltip title="Add-Ons" placement="right"  >
                        <IconButton className='icon-btn'>
                            <LaunchIcon />
                        </IconButton>  
                    </Tooltip>
                </div>

            </div>
        </div>
    )
}
