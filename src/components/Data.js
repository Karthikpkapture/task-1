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
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${
              params.getValue(params.id, 'lastName') || ''
            }`,
        },
      ];
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 31 },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];

      useEffect(() => {

        async function user(){
            const request =await axios.get(`https://reqres.in/api/users?page=2`)
                console.log(request.data);
               
        }
        user();

    }, [])

      
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
                    rows={rows}
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
