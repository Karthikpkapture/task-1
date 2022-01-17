import React,{useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Data.css';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import SideBar from './SideBar';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';



function Data() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [users, setUsers] = React.useState([]);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };


    const actions = [
      { icon: <AddIcon />, name: 'Add New User' },
      { icon: <SaveIcon />, name: 'Save' },
      { icon: <PrintIcon />, name: 'Print' },
      { icon: <ShareIcon />, name: 'Share' },
    ];

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'first_name', headerName: 'First name', width: 130 },
        { field: 'last_name', headerName: 'Last name', width: 130 },
       
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.getValue(params.id, 'first_name') || ''} ${
              params.getValue(params.id, 'last_name') || ''
            }`,
        },
      ];
      
      useEffect(() => {

        async function user(){
            const request =await axios.get(`https://reqres.in/api/users?page=2`)
                // console.log(request.data.data);
                setUsers(request.data.data);
                 
        }
        user();
        console.log(users);
    }, []); 

      
    return (
        <div className='flexbox-wrap '>
          {/* child */}
          <div className='flex-contain-1'>
            <SideBar />
          </div>
          {/* Flex  */}
          <div className='flex-contain-2'>
            <Tooltip title="Sample Data Table which used to monitor the users" placement="top"  >
                  <h1 className="text-3xl font-bold m-4 text-center" >Customers</h1>
              </Tooltip>
              <div style={{ height: 600, width: '80%', alignItems:'center', justifyContent:'center', margin:'auto' }}>
              
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    filterModel={{
                      items: [{ columnField: 'firstName', operatorValue: 'contains', value: '' }],
                    }}
                />

                <Box sx={{ height: 100, transform: 'translateZ(0px)', flexGrow: 1 }}>
                  <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                  >
                    {actions.map((action) => (
                      <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                      />
                    ))}
                  </SpeedDial>
                </Box>
                
              </div>
              <div className='components'>

              </div>
          </div>
            
        </div>
    )
}

export default Data
